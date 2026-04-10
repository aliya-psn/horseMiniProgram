const RECORD_KEY = 'fortune_last_record_v2';
const SBTI_RECORD_KEY = 'sbti_last_record_v1';

/** Tab：0=SBTI（默认），1=马年运势。分享用 p=sbti / p=fortune；兼容旧 query tab=0/1 */
function tabFromOptions(options) {
  const p = options.p;
  if (p === 'fortune' || p === 'horse') return 1;
  if (p === 'sbti') return 0;
  const legacy = String(options.tab == null ? '' : options.tab);
  if (legacy === '0') return 1;
  if (legacy === '1') return 0;
  return 0;
}

Page({
  data: {
    tab: 0,
    hasRecord: false,
    recordTime: '',
    recordTitle: '',
    hasSbtiRecord: false,
    sbtiRecordTime: '',
    sbtiRecordTitle: ''
  },

  onLoad(options) {
    this.setData({ tab: tabFromOptions(options) });
  },

  onShow() {
    this.refreshRecords();
  },

  refreshRecords() {
    const record = wx.getStorageSync(RECORD_KEY);
    if (record && record.result) {
      this.setData({
        hasRecord: true,
        recordTime: record.time || '',
        recordTitle: record.result.type || ''
      });
    } else {
      this.setData({
        hasRecord: false,
        recordTime: '',
        recordTitle: ''
      });
    }

    const sbtiRec = wx.getStorageSync(SBTI_RECORD_KEY);
    if (sbtiRec && sbtiRec.primaryCode) {
      this.setData({
        hasSbtiRecord: true,
        sbtiRecordTime: sbtiRec.time || '',
        sbtiRecordTitle: `${sbtiRec.primaryCode} · ${sbtiRec.primaryName || ''}`
      });
    } else {
      this.setData({
        hasSbtiRecord: false,
        sbtiRecordTime: '',
        sbtiRecordTitle: ''
      });
    }
  },

  onTabFortune() {
    this.setData({ tab: 1 });
  },

  onTabSbti() {
    this.setData({ tab: 0 });
  },

  onStartTest() {
    wx.setStorageSync('fortune_score', 0);
    wx.redirectTo({
      url: '/pages/quiz/quiz?index=0'
    });
  },

  onRecordTap() {
    wx.navigateTo({
      url: '/pages/result/result?fromRecord=1'
    });
  },

  onStartSbti() {
    wx.removeStorageSync('sbti_quiz_state_v1');
    wx.navigateTo({
      url: '/pages/sbti/quiz'
    });
  },

  onSbtiRecordTap() {
    wx.navigateTo({
      url: '/pages/sbti/result'
    });
  },

  onShareAppMessage() {
    if (this.data.tab === 0) {
      return {
        title: 'SBTI 人格评测 - 测测你是哪种梗格',
        path: '/pages/home/home?p=sbti',
        imageUrl: ''
      };
    }
    return {
      title: '2026马年运势小测试 - 测测你的新年运势',
      path: '/pages/home/home?p=fortune',
      imageUrl: ''
    };
  },

  onShareTimeline() {
    if (this.data.tab === 0) {
      return {
        title: 'SBTI 人格评测 - 测测你是哪种梗格',
        query: 'p=sbti',
        imageUrl: ''
      };
    }
    return {
      title: '2026马年运势小测试 - 测测你的新年运势',
      query: 'p=fortune',
      imageUrl: ''
    };
  }
});
