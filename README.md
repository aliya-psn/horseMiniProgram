# 2026马年运势小测试

微信小程序原生项目，实现「2026马年运势测试」完整功能：首页引导、10 道题答题、结果页与分享/重新测试。

## 项目结构

```
horseMiniProgram/
├── app.js                 # 小程序入口，初始化存储
├── app.json               # 全局配置、页面路由
├── app.wxss               # 全局样式（红金主色）
├── project.config.json    # 项目配置（需填 AppID）
├── sitemap.json
├── README.md
└── pages/
    ├── index/             # 首页（引导页）
    │   ├── index.js
    │   ├── index.json
    │   ├── index.wxml
    │   └── index.wxss
    ├── quiz/              # 答题页
    │   ├── quiz.js
    │   ├── quiz.json
    │   ├── quiz.wxml
    │   └── quiz.wxss
    └── result/            # 结果页
        ├── result.js
        ├── result.json
        ├── result.wxml
        └── result.wxss
```

## 编译与运行

1. 用 **微信开发者工具** 打开本项目目录（选择「导入项目」）。
2. 在 `project.config.json` 中把 `"appid": "请替换为你的小程序 AppID"` 改成你的小程序 AppID；若仅体验可不改，使用测试号。
3. 点击「编译」，在模拟器或真机上预览。
4. 流程：首页点「开始测试」→ 依次答 10 题 → 进入结果页 → 可「分享给好友」或「重新测试」。

## 广告占位与替换方式

- **Banner 广告位（首页底部）**  
  - 位置：`pages/index/index.wxml` 中 class 为 `ad-banner-placeholder` 的 `<view>`。  
  - 替换：删除该整块 `<view>...</view>`，在原位置使用官方 Banner 组件，例如：  
    `<ad unit-id="你的Banner广告位ID" type="banner"/>`  
  - 广告位 ID 在微信公众平台 → 流量主 → 广告管理 中创建 Banner 后获取。

- **插屏广告位（结果页）**  
  - 位置：`pages/result/result.wxml` 中 class 为 `ad-interstitial-placeholder` 的 `<view>`（占位说明）；逻辑在 `pages/result/result.js`。  
  - 替换：  
    1. 在结果页 `onLoad` 或 `onShow` 中创建插屏广告：  
       `const interstitialAd = wx.createInterstitialAd({ adUnitId: '你的插屏广告位ID' });`  
    2. 在适当时机（如进入结果页 1 秒后）调用 `interstitialAd.show()`。  
    3. 可删除或保留页面中的插屏占位说明 view。  
  - 广告位 ID 在公众平台流量主中创建「插屏广告」后获取。

## 功能说明

- **计分**：每题选 A/B/C 分别得 1/2/3 分，总分 10–30 分，仅前端用 `wx.setStorageSync('fortune_score', ...)` 存储，无后端。
- **结果规则**：10–15 安稳顺遂型，16–22 稳中向好型，23–30 活力旺运型。
- **分享**：结果页「分享给好友」使用自定义文案（标题：「我测了2026运势，也太准了！你也来试试～」）；分享到朋友圈需用户通过右上角菜单操作，已开启 `shareTimeline`。
- **重新测试**：结果页点击「重新测试」会清空分数并 `redirectTo` 首页。
- **保存运势图**：结果页点击「保存运势图」后，用 canvas 绘制红金风格运势图（含结果+二维码占位），再通过 `wx.canvasToTempFilePath` 导出图片，`wx.saveImageToPhotosAlbum` 保存到相册；未授权相册时会弹窗引导去设置开启。
- **我的测试记录**：首页「开始测试」下方展示最近 1 次测试记录（时间+运势类型），数据来自 `wx.setStorageSync('fortune_last_record')`；点击记录可跳转结果页查看该次结果（无需重新答题）。

## 运势图二维码占位 → 替换为真实小程序码

- **占位位置**：`pages/result/result.js` 中 `drawAndSave()` 内，绘制 200×200 区域（右下角）为灰色块+文字「替换为小程序二维码」。
- **替换方式**：  
  1. 服务端调用微信接口生成带参小程序码（如 `wxacode.getUnlimited` 或 `get`），得到图片 URL 或 buffer。  
  2. 在小程序内先下载到临时路径：`wx.downloadFile({ url })` 或从 buffer 写入临时文件。  
  3. 在调用 `ctx.draw()` 之前，用 `ctx.drawImage(tempFilePath, qrX, qrY, 200, 200)` 绘制二维码（需注意 drawImage 为异步，需在 `ctx.draw(false, callback)` 之前完成绘制）。  
  4. 删除或注释掉当前占位的 strokeRect/fillRect/fillText 二维码区域代码，改为上述 drawImage。

## 功能测试步骤

1. **测试记录**  
   - 首次打开首页：「我的测试记录」显示「暂无测试记录，点击开始测试解锁～」，点击会进入答题。  
   - 答完 10 题进入结果页后，自动写入一条记录（时间+运势类型）。  
   - 返回首页（或从结果页「重新测试」再进入首页）：应看到「我的测试记录」显示刚完成的日期与运势类型。  
   - 点击该记录：应跳转到结果页并展示同一次结果（无需再答题）。

2. **保存运势图**  
   - 在结果页点击「保存运势图」。  
   - 若未授权相册：会弹窗提示，选择「去设置」可打开设置页开启「保存到相册」。  
   - 已授权：会先出现「生成中…」，再保存到相册并提示「保存成功，快去朋友圈分享吧～」。  
   - 到系统相册中查看，应有一张 3:4 比例、红金背景+运势内容+底部二维码占位图的图片。

## 技术栈

- 微信小程序原生：wxml / wxss / js / json  
- 本地存储：`wx.setStorageSync` / `wx.getStorageSync`（含 `fortune_last_record` 测试记录）  
- 页面跳转：`wx.redirectTo` / `wx.navigateTo`  
- Canvas：`wx.createCanvasContext`、`wx.canvasToTempFilePath`、`wx.saveImageToPhotosAlbum`（保存运势图）
