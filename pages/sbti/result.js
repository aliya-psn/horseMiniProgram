const { DIM_ORDER, letterFromSum } = require('../../utils/sbti-engine.js');

const RESULT_KEY = 'sbti_last_result_v1';

function groupForDim(dim) {
  if (dim.startsWith('S')) return 's';
  if (dim.startsWith('E')) return 'e';
  if (dim.startsWith('A') && !dim.startsWith('Ac')) return 'a';
  if (dim.startsWith('Ac')) return 'ac';
  if (dim.startsWith('So')) return 'so';
  return 's';
}

Page({
  data: {
    loaded: false,
    detailOpen: true,
    primaryLine: '',
    primaryTagline: '',
    tags: [],
    ranked: [],
    highlightTop: false,
    footNote: ''
  },

  onLoad() {
    const payload = wx.getStorageSync(RESULT_KEY);
    if (!payload || !payload.primary) {
      wx.showToast({ title: '暂无结果', icon: 'none' });
      setTimeout(() => wx.navigateBack({ fail() { wx.redirectTo({ url: '/pages/home/home' }); } }), 600);
      return;
    }

    const scores = payload.dimensionScores || {};
    const tags = DIM_ORDER.map((dim) => {
      const sum = scores[dim] || 0;
      const letter = letterFromSum(sum);
      const g = groupForDim(dim);
      return {
        dim,
        label: letter,
        sum,
        line: `${dim} ${letter}`,
        grpClass: `tag-grp-${g}`
      };
    });

    const p = payload.primary;
    const code = p.displayCode || p.code;
    const name = p.name || '';
    const hasSim = p.similarity != null && p.similarity !== '';
    const sim = hasSim ? p.similarity : null;
    const simText = hasSim ? String(sim) + '%' : '';
    const namePart = name ? ' ' + name : '';

    let primaryLine = '';
    if (payload.reason === 'drunk') {
      primaryLine = ('主人格：' + code + namePart).trim();
    } else if (payload.reason === 'hhhh') {
      if (hasSim) {
        primaryLine = '主人格：' + code + namePart + '（最高 ' + simText + '）';
      } else {
        primaryLine = ('主人格：' + code + namePart).trim();
      }
    } else {
      if (hasSim) {
        primaryLine = ('主人格：' + code + namePart + ' ' + simText).trim();
      } else {
        primaryLine = ('主人格：' + code + namePart).trim();
      }
    }

    let footNote = '';
    if (payload.reason === 'drunk') {
      footNote = '你已触发「喝酒」相关题目的特殊判定，结果为酒鬼人格。';
    } else if (payload.reason === 'hhhh') {
      footNote = '你与 25 种普通人格的相似度均低于 60%，已兜底为傻乐者。';
    }

    const highlightTop = payload.reason === 'normal';

    this.setData({
      loaded: true,
      detailOpen: true,
      primaryLine,
      primaryTagline: p.tagline || '',
      tags,
      ranked: payload.ranked || [],
      highlightTop,
      footNote
    });
  },

  toggleDetail() {
    this.setData({ detailOpen: !this.data.detailOpen });
  },

  onRetest() {
    wx.removeStorageSync('sbti_quiz_state_v1');
    wx.redirectTo({ url: '/pages/sbti/quiz' });
  },

  onShareAppMessage() {
    const payload = wx.getStorageSync(RESULT_KEY);
    const primary = payload && payload.primary;
    const code = primary ? primary.displayCode || primary.code : 'SBTI';
    const name = primary && primary.name ? primary.name : '';
    const title = name
      ? '我的 SBTI 主人格是 ' + code + '（' + name + '）'
      : '我的 SBTI 主人格是 ' + code;
    return {
      title,
      path: '/pages/home/home?p=sbti'
    };
  }
});
