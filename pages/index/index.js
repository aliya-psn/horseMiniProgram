// 兼容旧分享/收藏路径：统一进入 Tab 首页
Page({
  onLoad() {
    wx.redirectTo({ url: '/pages/home/home' });
  }
});
