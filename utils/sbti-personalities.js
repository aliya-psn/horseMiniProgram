/**
 * SBTI 人格标准结果串（15 维：S1–S3, E1–E3, A1–A3, Ac1–Ac3, So1–So3）
 * GOGO 与知乎示例一致；其余为可玩性占位串，建议对照原文替换：
 * https://www.zhihu.com/question/2025672813621637606/answer/2025748628937950574
 * 作者：Richard Xu
 */

function norm(s) {
  return String(s || '').replace(/-/g, '').toUpperCase();
}

const NORMAL = [
  { code: 'CTRL', displayCode: 'CTRL', name: '拿捏者', tagline: '怎么样，被我拿捏了吧？', pattern: 'HHHMLMHHLMMHLHM' },
  { code: 'ATM', displayCode: 'ATM-er', name: '送钱者', tagline: '你以为我很有钱吗？', pattern: 'LMHMLHLHMLHHMML' },
  { code: 'DIOR', displayCode: 'Dior-s', name: '屌丝', tagline: '等着我屌丝逆袭。', pattern: 'MMLLHMHHLHLMMHH' },
  { code: 'BOSS', displayCode: 'BOSS', name: '领导者', tagline: '方向盘给我，我来开。', pattern: 'HHHLMHMHLMMHMLH' },
  { code: 'THANK', displayCode: 'THAN-K', name: '感恩者', tagline: '我感谢苍天！我感谢大地！', pattern: 'HMLMHMHHMLLHMLM' },
  { code: 'OHNO', displayCode: 'OH-NO', name: '哦不人', tagline: '哦不！我怎么会是这个人格？！', pattern: 'LHMHLMLHMHHMMLL' },
  { code: 'GOGO', displayCode: 'GOGO', name: '行者', tagline: 'gogogo~出发咯', pattern: norm('HHM-HMH-MMH-HHH-MHM') },
  { code: 'SEXY', displayCode: 'SEXY', name: '尤物', tagline: '您就是天生的尤物！', pattern: 'MHMHHHMLMHHMLMH' },
  { code: 'LOVER', displayCode: 'LOVE-R', name: '多情者', tagline: '爱意太满，现实显得有点贫瘠。', pattern: 'HHLMHMHHMLLMHMH' },
  { code: 'MUM', displayCode: 'MUM', name: '妈妈', tagline: '或许...我可以叫你妈妈吗....?', pattern: 'HHMLHMLMHHMMLHL' },
  { code: 'FAKE', displayCode: 'FAKE', name: '伪人', tagline: '已经，没有人类了。', pattern: 'LMLHLMHMLHLMHML' },
  { code: 'OJBK', displayCode: 'OJBK', name: '无所谓人', tagline: '我说随便，是真的随便。', pattern: 'MMHMLLMHMLHMHMM' },
  { code: 'MALO', displayCode: 'MALO', name: '吗喽', tagline: '人生是个副本，而我只是一只吗喽。', pattern: 'LMMHHMLLMHHMLMM' },
  { code: 'JOKER', displayCode: 'JOKE-R', name: '小丑', tagline: '原来我们都是小丑。', pattern: 'MLHLMHMLHLMHMLH' },
  { code: 'WOC', displayCode: 'WOC!', name: '握草人', tagline: '卧槽，我怎么是这个人格？', pattern: 'LHMLHMLHMHHMLHM' },
  { code: 'THINK', displayCode: 'THIN-K', name: '思考者', tagline: '已深度思考100s。', pattern: 'HMHMLHHMLMHMLHH' },
  { code: 'SHIT', displayCode: 'SHIT', name: '愤世者', tagline: '这个世界，构石一坨。', pattern: 'LLHMLHMLHMLHMHL' },
  { code: 'ZZZZ', displayCode: 'ZZZZ', name: '装死者', tagline: '我没死，我只是在睡觉。', pattern: 'MMLLMHHMLLMHHML' },
  { code: 'POOR', displayCode: 'POOR', name: '贫困者', tagline: '我穷，但我很专。', pattern: 'LHHMLLMHHMLLMHH' },
  { code: 'MONK', displayCode: 'MONK', name: '僧人', tagline: '没有那种世俗的欲望。', pattern: 'MLMHHMLLMHHMLLM' },
  { code: 'IMSB', displayCode: 'IMSB', name: '傻者', tagline: '认真的么？我真的是傻逼么？', pattern: 'HLLMHHMLLMHHMLL' },
  { code: 'SOLO', displayCode: 'SOLO', name: '孤儿', tagline: '我哭了，我怎么会是孤儿？', pattern: 'LHHLMMLHHLMMLHH' },
  { code: 'FUCK', displayCode: 'FUCK', name: '草者', tagline: '操！这是什么人格？', pattern: 'HLMHMLHLMHMLHLM' },
  { code: 'DEAD', displayCode: 'DEAD', name: '死者', tagline: '我，还活着吗？', pattern: 'MLLHMLLHMLLHMLL' },
  { code: 'IMFW', displayCode: 'IMFW', name: '废物', tagline: '我真的...是废物吗？', pattern: 'LLMLHMLLHMLLHML' }
];

const SPECIAL = {
  HHHH: {
    code: 'HHHH',
    displayCode: 'HHHH',
    name: '傻乐者',
    tagline: '哈哈哈哈哈哈。',
    pattern: null
  },
  DRUNK: {
    code: 'DRUNK',
    displayCode: 'DRUNK',
    name: '酒鬼',
    tagline: '烈酒烧喉，不得不醉。',
    pattern: null
  }
};

module.exports = {
  NORMAL,
  SPECIAL,
  norm
};
