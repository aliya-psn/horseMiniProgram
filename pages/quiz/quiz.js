// 答题页：10 道题，每题 3 选项对应 1/2/3/4 分，本地计分
const QUESTIONS = [
  {
    id: 0,
    title: '出门时发现鞋带开了，你会怎么做？',
    options: [
      { text: 'A. 立刻系好，觉得不系好会不安心', score: 1 },
      { text: 'B. 找个干净的地方，慢慢系紧', score: 2 },
      { text: 'C. 心里暗喜：这是“解千结”，今年烦恼全消', score: 3 },
      { text: 'D. 系个漂亮的蝴蝶结，当作“结好运”的仪式', score: 4 }
    ]
  },
  {
    id: 1,
    title: '走路时捡到一枚硬币，你的第一反应是？',
    options: [
      { text: 'A. 捡起来收好，积少成多也是财', score: 1 },
      { text: 'B. 看一眼面额，顺手揣进兜里', score: 2 },
      { text: 'C. 这是“财气上门”，今天运气肯定不错', score: 3 },
      { text: 'D. 立马花掉买水，寓意“流水生财”', score: 4 }
    ]
  },
  {
    id: 2,
    title: '连续几天做了同样的梦，你会？',
    options: [
      { text: 'A. 不在意，梦都是反的，睡醒就忘', score: 1 },
      { text: 'B. 有点好奇，跟身边人随口聊聊', score: 2 },
      { text: 'C. 查一下周公解梦，看看有什么预兆', score: 3 },
      { text: 'D. 当作潜意识的提醒，顺势许个愿', score: 4 }
    ]
  },
  {
    id: 3,
    title: '买衣服时，你会特意选什么颜色？',
    options: [
      { text: 'A. 黑白灰，百搭不出错，最稳妥', score: 1 },
      { text: 'B. 莫兰迪色，耐看又显气质', score: 2 },
      { text: 'C. 红色系，提气色，主打一个“开门红”', score: 3 },
      { text: 'D. 金黄色，哪怕是装饰，也要沾点“贵气”', score: 4 }
    ]
  },
  {
    id: 4,
    title: '看到喜鹊从窗前飞过，你会？',
    options: [
      { text: 'A. 觉得挺好看，仅此而已', score: 1 },
      { text: 'B. 心情变好，感叹大自然的美好', score: 2 },
      { text: 'C. 心头一动：这是喜兆，最近要有好事', score: 3 },
      { text: 'D. 立刻拿出手机拍照，留住这份好运', score: 4 }
    ]
  },
  {
    id: 5,
    title: '日历撕到了新的月份，你会？',
    options: [
      { text: 'A. 随手扔垃圾桶，这是正常流程', score: 1 },
      { text: 'B. 折起来放好，留着当草稿纸', score: 2 },
      { text: 'C. 对着新月份拜一拜，默念“顺风顺水”', score: 3 },
      { text: 'D. 在吉日上画个圈，提前规划好日子', score: 4 }
    ]
  },
  {
    id: 6,
    title: '喝水时不小心洒了一点在桌上，你会？',
    options: [
      { text: 'A. 赶紧擦掉，怕桌子受潮变形', score: 1 },
      { text: 'B. 拿纸巾吸干，顺便擦干净桌面', score: 2 },
      { text: 'C. 笑称“水满则溢”，今年注定是富足的一年', score: 3 },
      { text: 'D. 用手沾一点点在眉心，当作“点福”', score: 4 }
    ]
  },
  {
    id: 7,
    title: '选座位时，你通常会选？',
    options: [
      { text: 'A. 靠里的角落，安静不被打扰', score: 1 },
      { text: 'B. 中间的位置，进出方便', score: 2 },
      { text: 'C. 靠窗的位置，吸纳窗外的阳光和灵气', score: 3 },
      { text: 'D. 正对门口的位置，寓意“开门见喜”', score: 4 }
    ]
  },
  {
    id: 8,
    title: '收到一份意外的小礼物，你的心情是？',
    options: [
      { text: 'A. 有点负担，想着怎么回礼', score: 1 },
      { text: 'B. 礼貌感谢，心里感到温暖', score: 2 },
      { text: 'C. 惊喜不已，这是“人缘爆棚”的信号', score: 3 },
      { text: 'D. 觉得自己被世界偏爱，好运正在靠近', score: 4 }
    ]
  },
  {
    id: 9,
    title: '此刻，你最先想许下的愿望是？',
    options: [
      { text: 'A. 无病无灾，家人都平平安安', score: 1 },
      { text: 'B. 努力不被辜负，付出都有回报', score: 2 },
      { text: 'C. 时来运转，遇到改变命运的贵人', score: 3 },
      { text: 'D. 心想事成，所有目标全部达成', score: 4 }
    ]
  }
];

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
