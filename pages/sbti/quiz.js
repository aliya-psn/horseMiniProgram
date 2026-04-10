const { QUESTIONS, labelFor } = require('../../utils/sbti-questions.js');
const { DIM_ORDER, computeResult } = require('../../utils/sbti-engine.js');

const STATE_KEY = 'sbti_quiz_state_v1';
const RESULT_KEY = 'sbti_last_result_v1';
const RECORD_KEY = 'sbti_last_record_v1';

function emptyScores() {
  const o = {};
  DIM_ORDER.forEach((d) => {
    o[d] = 0;
  });
  return o;
}

Page({
  data: {
    currentIndex: 0,
    total: QUESTIONS.length,
    question: null,
    selectedKey: null,
    selectedOption: null
  },

  onLoad() {
    let state = wx.getStorageSync(STATE_KEY);
    if (!state || !state.scores) {
      state = { index: 0, scores: emptyScores(), drunkForced: false };
      wx.setStorageSync(STATE_KEY, state);
    }
    this.applyState(state);
  },

  applyState(state) {
    const q = QUESTIONS[state.index];
    if (!q) {
      this.finish(state);
      return;
    }
    const question = {
      ...q,
      dimensionLabel: labelFor(q.dimension),
      options: q.options.map((opt) => ({
        ...opt,
        pillClass:
          opt.delta > 0 ? 'pill-pos' : opt.delta < 0 ? 'pill-neg' : 'pill-zero',
        pillText: opt.delta > 0 ? `+${opt.delta}` : String(opt.delta)
      }))
    };
    this.setData({
      currentIndex: state.index,
      total: QUESTIONS.length,
      question,
      selectedKey: null,
      selectedOption: null
    });
  },

  onSelectOption(e) {
    const { key } = e.currentTarget.dataset;
    const q = QUESTIONS[this.data.currentIndex];
    if (!q) return;
    const opt = q.options.find((o) => o.key === key);
    this.setData({ selectedKey: key, selectedOption: opt });
  },

  onNext() {
    const state = wx.getStorageSync(STATE_KEY);
    const q = QUESTIONS[state.index];
    const sel = this.data.selectedOption;
    if (!q || !sel) return;

    state.scores[q.dimension] = (state.scores[q.dimension] || 0) + sel.delta;
    if (sel.forceDrunk) state.drunkForced = true;

    state.index += 1;
    wx.setStorageSync(STATE_KEY, state);

    if (state.index >= QUESTIONS.length) {
      this.finish(state);
      return;
    }
    this.applyState(state);
  },

  finish(state) {
    const payload = computeResult(state.scores, { drunkForced: state.drunkForced });
    const now = new Date();
    const p2 = (n) => (n < 10 ? '0' : '') + n;
    const timeStr = `${now.getFullYear()}-${p2(now.getMonth() + 1)}-${p2(now.getDate())} ${p2(now.getHours())}:${p2(now.getMinutes())}`;

    wx.setStorageSync(RESULT_KEY, payload);
    wx.setStorageSync(RECORD_KEY, {
      time: timeStr,
      primaryCode: payload.primary.displayCode || payload.primary.code,
      primaryName: payload.primary.name
    });
    wx.removeStorageSync(STATE_KEY);
    wx.redirectTo({ url: '/pages/sbti/result' });
  }
});
