/**
 * 30 题：每维 2 题；选项 A/B/C 对该维贡献 +1 / 0 / -1（累加后映射 H/M/L）
 * 文案偏搞怪、贴合 SBTI 梗格气质；喝酒题仅第 10 题 C 选项带 forceDrunk。
 */

const LABELS = {
  S1: '自尊自信',
  S2: '自我清晰度',
  S3: '核心价值',
  E1: '依恋安全感',
  E2: '情感投入度',
  E3: '边界与依赖',
  A1: '世界观倾向',
  A2: '规则与灵活度',
  A3: '人生意义感',
  Ac1: '动机导向',
  Ac2: '决策风格',
  Ac3: '执行模式',
  So1: '社交主动性',
  So2: '人际边界感',
  So3: '表达与真实度'
};

const QUESTIONS = [
  // S1 自尊自信
  {
    id: 1,
    dimension: 'S1',
    title: '群里有人阴阳你「就这？」，你内心 OS 更接近？',
    options: [
      { key: 'A', text: '笑死，我自有节奏，懒得自证', delta: 1 },
      { key: 'B', text: '哦不！我怎么会是这种人？！（然后偷偷复盘）', delta: 0 },
      { key: 'C', text: '认真的么？我真的是傻逼么？', delta: -1 }
    ]
  },
  {
    id: 2,
    dimension: 'S1',
    title: 'BOSS 附体时刻：要你带一个明显会翻车的项目，你？',
    options: [
      { key: 'A', text: '方向盘给我，我来开。先接再说', delta: 1 },
      { key: 'B', text: '先摸鱼观望，看有没有背锅侠', delta: 0 },
      { key: 'C', text: '我真的…是废物吗？我先装死', delta: -1 }
    ]
  },
  // S2 自我清晰度
  {
    id: 3,
    dimension: 'S2',
    title: 'THIN-K 模式：别人问「你到底图啥」，你？',
    options: [
      { key: 'A', text: '已深度思考 100s，能掰扯三条动机', delta: 1 },
      { key: 'B', text: '图个氛围感吧…说完自己也不信', delta: 0 },
      { key: 'C', text: '脑子只有「卧槽」和空白，没有图啥', delta: -1 }
    ]
  },
  {
    id: 4,
    dimension: 'S2',
    title: 'Dior-s 逆袭剧本里，你给自己写的「当前章节标题」是？',
    options: [
      { key: 'A', text: '等着我屌丝逆袭·具体行动计划 v0.3', delta: 1 },
      { key: 'B', text: '逆袭在写了在写了（新建文件夹）', delta: 0 },
      { key: 'C', text: 'ZZZZ…我没死，我只是在睡觉', delta: -1 }
    ]
  },
  // S3 核心价值
  {
    id: 5,
    dimension: 'S3',
    title: 'MONK 问你：世俗欲望和内心底线对打，你站谁？',
    options: [
      { key: 'A', text: '没有那种世俗的欲望…骗你的，底线还是要的', delta: 1 },
      { key: 'B', text: '看价码，有时底线可打折', delta: 0 },
      { key: 'C', text: '我说随便，是真的随便（底线也可随便）', delta: -1 }
    ]
  },
  {
    id: 6,
    dimension: 'S3',
    title: 'FAKE 时刻：「正确但难受」和「舒服但离谱」二选一？',
    options: [
      { key: 'A', text: '已经，没有人类了，但我仍选更正确那边', delta: 1 },
      { key: 'B', text: '先舒服，再表演得像个人类', delta: 0 },
      { key: 'C', text: '舒服优先，正确是什么能吃吗', delta: -1 }
    ]
  },
  // E1 依恋安全感
  {
    id: 7,
    dimension: 'E1',
    title: 'CRUSH 已读不回两小时，你？',
    options: [
      { key: 'A', text: '爱意太满是我自己的事，TA 可能在忙', delta: 1 },
      { key: 'B', text: '开始脑补 80 集，但表面装 OJBK', delta: 0 },
      { key: 'C', text: '我哭了，我怎么会是孤儿？（秒变 SOLO）', delta: -1 }
    ]
  },
  {
    id: 8,
    dimension: 'E1',
    title: '心态崩了想找人兜底，你会？',
    options: [
      { key: 'A', text: '或许…我可以叫你妈妈吗…？（真诚求助）', delta: 1 },
      { key: 'B', text: '只敢对最熟的人弱弱说一句', delta: 0 },
      { key: 'C', text: '算了，人类不值得，我自己烂坑里', delta: -1 }
    ]
  },
  // E2 情感投入度
  {
    id: 9,
    dimension: 'E2',
    title: 'LOVE-R 上线：暧昧对象回你表情包，你？',
    options: [
      { key: 'A', text: '慢慢加码，但心里有数，不自我感动到破产', delta: 1 },
      { key: 'B', text: '爱意太满，现实显得有点贫瘠，先忍忍', delta: 0 },
      { key: 'C', text: '一秒上头一秒下头，恋爱副本我挂机了', delta: -1 }
    ]
  },
  {
    id: 10,
    dimension: 'E2',
    title: '酒桌上有人喊：「不喝就是看不起我！」你？',
    options: [
      { key: 'A', text: '拿捏了：我以茶代酒，看不起的是酒精不是您', delta: 1 },
      { key: 'B', text: '抿一口糊弄，内心 THAN-K 苍天让我活着回家', delta: 0 },
      { key: 'C', text: '烈酒烧喉，不得不醉，喝！（触发酒鬼判定）', delta: -1, forceDrunk: true }
    ]
  },
  // E3 边界与依赖
  {
    id: 11,
    dimension: 'E3',
    title: 'CTRL 视角：亲戚追问工资对象生育三连，你？',
    options: [
      { key: 'A', text: '怎么样，被我拿捏了吧？礼貌堵回去', delta: 1 },
      { key: 'B', text: '尬笑打太极，事后群里吐槽', delta: 0 },
      { key: 'C', text: '要么憋到内伤，要么当场爆炸退群', delta: -1 }
    ]
  },
  {
    id: 12,
    dimension: 'E3',
    title: '你更破防哪一种？',
    options: [
      { key: 'A', text: '被当透明人还要随时汇报行程', delta: 1 },
      { key: 'B', text: '两种都烦，看对方是谁', delta: 0 },
      { key: 'C', text: '冷暴力已读不回，我像空气', delta: -1 }
    ]
  },
  // A1 世界观倾向
  {
    id: 13,
    dimension: 'A1',
    title: '刷到离谱新闻，你的世界观弹幕是？',
    options: [
      { key: 'A', text: '我感谢苍天！我感谢大地！…哦不，我先分析下结构', delta: 1 },
      { key: 'B', text: '卧槽，我怎么是这个世界的人？', delta: 0 },
      { key: 'C', text: '这个世界，构石一坨。划走保平安', delta: -1 }
    ]
  },
  {
    id: 14,
    dimension: 'A1',
    title: '你相信「努力就会有回报」吗？',
    options: [
      { key: 'A', text: '大体信，但知道还有运气和版本', delta: 1 },
      { key: 'B', text: '信一半，另一半信命和摆烂', delta: 0 },
      { key: 'C', text: '人生是个副本，而我只是一只吗喽', delta: -1 }
    ]
  },
  // A2 规则与灵活度
  {
    id: 15,
    dimension: 'A2',
    title: '公司规定傻但领导盯得紧，你？',
    options: [
      { key: 'A', text: '先找擦边合规方案，再决定刚不刚', delta: 1 },
      { key: 'B', text: '表面遵守，背地灵活，小丑竟是我自己', delta: 0 },
      { key: 'C', text: '规则？我直接一个 WOC! 硬闯', delta: -1 }
    ]
  },
  {
    id: 16,
    dimension: 'A2',
    title: 'deadline 前一天需求全改，你？',
    options: [
      { key: 'A', text: 'gogogo~出发咯，改路线继续冲', delta: 1 },
      { key: 'B', text: '骂两句然后还是改，吗喽的命也是命', delta: 0 },
      { key: 'C', text: '我，还活着吗？先躺平再装死', delta: -1 }
    ]
  },
  // A3 人生意义感
  {
    id: 17,
    dimension: 'A3',
    title: '凌晨三点问人生意义，你？',
    options: [
      { key: 'A', text: '尤物也要睡觉，但明天还有想追的事', delta: 1 },
      { key: 'B', text: '意义在写了在写了（和逆袭同一个文件夹）', delta: 0 },
      { key: 'C', text: '草！这是什么人生？空到想对世界比个耶（反的）', delta: -1 }
    ]
  },
  {
    id: 18,
    dimension: 'A3',
    title: '如果账号注销、记忆清零重来，你？',
    options: [
      { key: 'A', text: '仍能说出几件非做不可的（哪怕很中二）', delta: 1 },
      { key: 'B', text: '先活着，梗格以后再说', delta: 0 },
      { key: 'C', text: '死者表示：怎样都行，别叫我起床', delta: -1 }
    ]
  },
  // Ac1 动机导向
  {
    id: 19,
    dimension: 'Ac1',
    title: 'ATM-er 灵魂拷问：你干活主要靠？',
    options: [
      { key: 'A', text: '我穷，但我很专——内在那股轴劲', delta: 1 },
      { key: 'B', text: '你以为我很有钱吗？所以一半为钱一半为脸', delta: 0 },
      { key: 'C', text: '全靠 deadline 和怕被骂，送钱也没人替我干', delta: -1 }
    ]
  },
  {
    id: 20,
    dimension: 'Ac1',
    title: '没人催、没 KPI，你还会动吗？',
    options: [
      { key: 'A', text: '会，自己的锅自己背', delta: 1 },
      { key: 'B', text: '拖延到罪恶感战胜懒惰', delta: 0 },
      { key: 'C', text: 'ZZZZ 装死，等世界毁灭', delta: -1 }
    ]
  },
  // Ac2 决策风格
  {
    id: 21,
    dimension: 'Ac2',
    title: '两难：A 稳但无聊，B 刺激但可能社死，你？',
    options: [
      { key: 'A', text: '列表格、问群友、试一小步——思考者上线', delta: 1 },
      { key: 'B', text: '拖到晚上，让直觉和外卖一起决定', delta: 0 },
      { key: 'C', text: '闭眼冲，错了就原来我们都是小丑', delta: -1 }
    ]
  },
  {
    id: 22,
    dimension: 'Ac2',
    title: '路边小孩把最后一颗糖塞给你，你？',
    options: [
      { key: 'A', text: '蹲下谢谢，问要不要一起看蚂蚁搬家', delta: 1 },
      { key: 'B', text: '收下，回头买一袋偷偷还人情', delta: 0 },
      { key: 'C', text: '我不要！（其实是怕欠人情，内心握草）', delta: -1 }
    ]
  },
  // Ac3 执行模式
  {
    id: 23,
    dimension: 'Ac3',
    title: '任务做到一半又臭又长，你？',
    options: [
      { key: 'A', text: '拆段+奶茶奖励，吗喽也要通关', delta: 1 },
      { key: 'B', text: '摸鱼与爆肝二象性', delta: 0 },
      { key: 'C', text: '弃坑保平安，或者无限拖尾', delta: -1 }
    ]
  },
  {
    id: 24,
    dimension: 'Ac3',
    title: '赶工到凌晨，兄弟喊你撸串续命，你？',
    options: [
      { key: 'A', text: '不去，干完这票再一起哈哈哈哈哈哈', delta: 1 },
      { key: 'B', text: '去坐会儿，撸串不喝酒', delta: 0 },
      { key: 'C', text: '去啊！天亮再说是废物的事', delta: -1 }
    ]
  },
  // So1 社交主动性
  {
    id: 25,
    dimension: 'So1',
    title: '陌生局只有你谁也不认识，你？',
    options: [
      { key: 'A', text: '主动尬聊两句，反正大家都是伪人', delta: 1 },
      { key: 'B', text: '等别人开口，我负责接梗', delta: 0 },
      { key: 'C', text: '缩角落实况：我哭了，我怎么会是孤儿', delta: -1 }
    ]
  },
  {
    id: 26,
    dimension: 'So1',
    title: '想加帅哥美女微信，你？',
    options: [
      { key: 'A', text: '找理由自然凑上去，被拒就 OJBK', delta: 1 },
      { key: 'B', text: '内心演完一百集才敢动', delta: 0 },
      { key: 'C', text: '算了，色胆没有，怂胆管够', delta: -1 }
    ]
  },
  // So2 人际边界感
  {
    id: 27,
    dimension: 'So2',
    title: '朋友第 N 次凌晨打电话倒苦水，你？',
    options: [
      { key: 'A', text: '今天能量条空了，明天再当妈妈', delta: 1 },
      { key: 'B', text: '接，但内心草者附体', delta: 0 },
      { key: 'C', text: '硬接，接到自己变废物', delta: -1 }
    ]
  },
  {
    id: 28,
    dimension: 'So2',
    title: '有人说你 lifestyle 太野/太宅，你？',
    options: [
      { key: 'A', text: '谢谢，我方向盘在我手里', delta: 1 },
      { key: 'B', text: '表面嗯嗯，内心握草十连', delta: 0 },
      { key: 'C', text: '立刻怀疑自己是不是傻者', delta: -1 }
    ]
  },
  // So3 表达与真实度
  {
    id: 29,
    dimension: 'So3',
    title: '在熟人面前，你更像？',
    options: [
      { key: 'A', text: '真人模式，只藏该藏的隐私', delta: 1 },
      { key: 'B', text: '切换 mild 版人设，别太吓到人', delta: 0 },
      { key: 'C', text: '已经，没有人类了，只剩营业微笑', delta: -1 }
    ]
  },
  {
    id: 30,
    dimension: 'So3',
    title: '观点和大家相反，你？',
    options: [
      { key: 'A', text: '客气但清晰杠一下，尤物也要讲道理', delta: 1 },
      { key: 'B', text: '用段子拐弯抹角，原来我们都是小丑', delta: 0 },
      { key: 'C', text: '咽下去，内心哦不！我怎么不敢说话？！', delta: -1 }
    ]
  }
];

function labelFor(dim) {
  return LABELS[dim] || dim;
}

module.exports = {
  QUESTIONS,
  LABELS,
  labelFor
};
