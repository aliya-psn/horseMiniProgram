// 首页：引导页逻辑 + 我的测试记录（本地存储 wx.setStorageSync 最多 1 条）

const RECORD_KEY = 'fortune_last_record'; // 与 result 页一致，存最近一次测试记录

Page({
  data: {
    hasRecord: false,
    recordTime: '',
    recordTitle: ''
  },

  onShow() {
    // 每次展示首页时读取本地测试记录，供「我的测试记录」模块展示
    const record = wx.getStorageSync(RECORD_KEY);
    if (record && record.resultTitle) {
      this.setData({
        hasRecord: true,
        recordTime: record.time || '',
        recordTitle: record.resultTitle || ''
      });
    } else {
      this.setData({
        hasRecord: false,
        recordTime: '',
        recordTitle: ''
      });
    }
  },

  /**
   * 开始测试：重置分数并跳转答题页第一题
   */
  onStartTest() {
    wx.setStorageSync('fortune_score', 0);
    wx.redirectTo({
      url: '/pages/quiz/quiz?index=0'
    });
  },

  /**
   * 点击测试记录：跳转结果页（fromRecord=1），结果页从本地存储读取最近一次记录展示。仅当 hasRecord 时该模块才显示，故无需再判断。
   */
  onRecordTap() {
    wx.navigateTo({
      url: '/pages/result/result?fromRecord=1'
    });
  }
});
