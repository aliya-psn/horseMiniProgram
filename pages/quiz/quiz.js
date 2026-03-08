// 答题页：10 道题，每题 4 选项对应 1/2/3/4 分，本地计分
const QUESTIONS = [
  {
  id:0,
  title:'如果今天突然放假一天，你最想做什么？',
  options:[
  { text:'A. 在家睡觉放松', score:2 },
  { text:'B. 去外面走走逛逛', score:3 },
  { text:'C. 安排点学习或工作', score:1 },
  { text:'D. 约朋友吃顿好的', score:4 }
  ]
  },
  {
  id:1,
  title:'排队时突然多开一个窗口，你会？',
  options:[
  { text:'A. 立刻过去排新队', score:4 },
  { text:'B. 看看哪边更快再决定', score:3 },
  { text:'C. 懒得动，继续排原来的', score:2 },
  { text:'D. 让别人先过去', score:1 }
  ]
  },
  {
  id:2,
  title:'如果手机电量只剩10%，你会？',
  options:[
  { text:'A. 赶紧找充电宝', score:3 },
  { text:'B. 省着用重要功能', score:2 },
  { text:'C. 觉得无所谓', score:1 },
  { text:'D. 心想：说不定马上就有好事发生', score:4 }
  ]
  },
  {
  id:3,
  title:'买彩票时你通常会？',
  options:[
  { text:'A. 随机选号码', score:3 },
  { text:'B. 用生日号码', score:2 },
  { text:'C. 几乎不买', score:1 },
  { text:'D. 挑个顺眼的数字组合', score:4 }
  ]
  },
  {
  id:4,
  title:'看到天空突然出现彩虹，你会？',
  options:[
  { text:'A. 拍照发朋友圈', score:3 },
  { text:'B. 看一会儿觉得挺美', score:2 },
  { text:'C. 当作普通天气现象', score:1 },
  { text:'D. 立刻许个愿', score:4 }
  ]
  },
  {
  id:5,
  title:'如果朋友突然请你吃饭，你第一反应？',
  options:[
  { text:'A. 有点不好意思', score:1 },
  { text:'B. 开心接受', score:3 },
  { text:'C. 想下次回请', score:2 },
  { text:'D. 觉得今天运气不错', score:4 }
  ]
  },
  {
  id:6,
  title:'走在路上听到有人夸你好看，你会？',
  options:[
  { text:'A. 假装没听见', score:1 },
  { text:'B. 有点开心', score:2 },
  { text:'C. 心情很好一整天', score:3 },
  { text:'D. 觉得今天一定有好事', score:4 }
  ]
  },
  {
  id:7,
  title:'如果你发现一朵四叶草，你会？',
  options:[
  { text:'A. 摘下来保存', score:4 },
  { text:'B. 拍照留念', score:3 },
  { text:'C. 看看就走', score:2 },
  { text:'D. 没注意', score:1 }
  ]
  },
  {
  id:8,
  title:'面对重要机会，你通常会？',
  options:[
  { text:'A. 先观察再行动', score:2 },
  { text:'B. 努力争取', score:3 },
  { text:'C. 看缘分', score:1 },
  { text:'D. 觉得机会就是运气来了', score:4 }
  ]
  },
  {
  id:9,
  title:'如果今天可以许一个愿望，你会选？',
  options:[
  { text:'A. 家人健康平安', score:2 },
  { text:'B. 财运变好', score:3 },
  { text:'C. 事业顺利', score:1 },
  { text:'D. 好运不断', score:4 }
  ]
  }
  ]

Page({
  data: {
    questions: QUESTIONS,
    currentIndex: 0,
    currentQuestion: null,
    total: QUESTIONS.length
  },

  onLoad(options) {
    const index = parseInt(options.index || '0', 10);
    const currentQuestion = QUESTIONS[index];
    this.setData({
      currentIndex: index,
      currentQuestion
    });
  },

  /**
   * 选择选项：累加分数并跳下一题或结果页
   */
  onSelectOption(e) {
    const { score } = e.currentTarget.dataset;
    let totalScore = wx.getStorageSync('fortune_score') || 0;
    totalScore += score;
    wx.setStorageSync('fortune_score', totalScore);

    const nextIndex = this.data.currentIndex + 1;
    if (nextIndex >= this.data.total) {
      wx.redirectTo({
        url: '/pages/result/result'
      });
      return;
    }
    wx.redirectTo({
      url: '/pages/quiz/quiz?index=' + nextIndex
    });
  }
});
