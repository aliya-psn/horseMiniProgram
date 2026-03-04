// 2026马年运势小测试 - 小程序入口
App({
  onLaunch() {
    // 首次启动时初始化本地存储（若不存在）
    const score = wx.getStorageSync('fortune_score');
    if (score === '' || score === undefined) {
      wx.setStorageSync('fortune_score', 0);
    }
  },
  globalData: {
    // 可在此扩展全局数据
  }
});
