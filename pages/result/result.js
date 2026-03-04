const RESULT_MAP = [
  {
    min: 10,
    max: 16,
    title: '安然清福型',
    keywords: '2026关键词：平安、恬淡、心安',
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '流年安稳，无波无澜，守住当下便是最好的财运。不求大起大落，只求稳稳当当。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '性情温和，人缘清净，家人和睦，知己相伴。虽无惊天贵人，却有长久温情。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '身心舒畅，少病少忧。生活节奏舒缓，日子清淡却满是幸福感。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '守好心，走好路。平淡即是真，安稳即是福。' }
    ]
  },
  {
    min: 17,
    max: 23,
    title: '温润进阶型',
    keywords: '2026关键词：踏实、成长、小成',
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '稳步上升，付出就有回报。财运慢慢积累，小财不断，细水长流。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '待人真诚，贵人渐现。身边会出现愿意拉你一把的人，助你少走弯路。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '精力充足，状态渐好。生活慢慢变好，一切都在往理想方向走。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '坚持住，慢慢来。你走的每一步，都在靠近好运。' }
    ]
  },
  {
    min: 24,
    max: 30,
    title: '吉运盈门型',
    keywords: '2026关键词：顺心、旺运、小富',
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '运势上扬，机会变多，容易遇到称心的项目与收入。正财稳健，偏财有喜。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '人缘旺盛，贵人显形。长辈、朋友、同事都愿意帮你，遇事有人扶。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '精气神十足，生活质量明显提升，心情舒畅，喜事常来。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '大胆一点，抓住机会。今年是你收获的好年份。' }
    ]
  },
  {
    min: 31,
    max: 34,
    title: '鸿运当头型',
    keywords: '2026关键词：红火、顺遂、显贵',
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '运势大开，事业有突破，容易被看见、被认可。财运旺盛，正财偏财双丰收。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '气场吸贵，走到哪都受欢迎。易遇人生贵人，为你铺路搭桥。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '元气满满，活力四射。生活充满惊喜，所愿多能如愿。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '顺势而上，大胆前行。你今年的运气，挡都挡不住。' }
    ]
  },
  {
    min: 35,
    max: 37,
    title: '天赐贵气型',
    keywords: '2026关键词：显贵、乘风、大成',
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '命带吉星，事业易有跨越式发展，容易出圈、成名、得利。财气自来。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '贵人强势出现，可能是改变你命运的人。人脉即是财脉，处处有人帮。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '身强体健，神采飞扬。生活品质大幅提升，心想事成的一年。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '放心去闯，大胆去拼。天助自助者，你必有所成。' }
    ]
  },
  {
    min: 38,
    max: 40,
    title: '巅峰旺运型',
    content: '你是万里挑一的天选旺运体质！',
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '势不可挡，一顺百顺。事业名利双收，财运亨通，所求皆得。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '众星捧月，贵人如云。逢凶化吉，遇难成祥，走到哪里都是福运中心。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '身心俱佳，光彩照人。生活充满惊喜与幸福，万事尽在掌握。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '你就是自己最好的风水。大胆实现所有愿望，今年属于你。' }
    ]
  }
];

const RECORD_KEY = 'fortune_last_record'; // 本地存储：最近一次测试记录，最多 1 条
const CANVAS_W = 600;
const CANVAS_H = 800;  // 比例 3:4，适配朋友圈

// 结果主题色配置：按不同运势类型切换页面主视觉
const THEME_MAP = {
  '安然清福型': {
    primary: '#D8E3DA',
    secondary: '#BFCBBF',
    textPrimary: '#3A3F36',
    textSecondary: '#6B7267',
    bg: '#F5F7F4'
  },
  '温润进阶型': {
    primary: '#E9D4C2',
    secondary: '#D2B49C',
    textPrimary: '#3D3127',
    textSecondary: '#715644',
    bg: '#FAF4ED'
  },
  '吉运盈门型': {
    primary: '#F6D5C4',
    secondary: '#E9A87A',
    textPrimary: '#4A2818',
    textSecondary: '#80452B',
    bg: '#FFF6EF'
  },
  '鸿运当头型': {
    primary: '#E84A3A',
    secondary: '#F3B45F',
    textPrimary: '#3B1812',
    textSecondary: '#86402B',
    bg: '#FFF3EA'
  },
  '天赐贵气型': {
    primary: '#8E2C3A',
    secondary: '#D8B46A',
    textPrimary: '#2B1515',
    textSecondary: '#B48A64',
    bg: '#F7F0E6'
  },
  '巅峰旺运型': {
    primary: '#D4AF37',
    secondary: '#C0392B',
    textPrimary: '#2A160A',
    textSecondary: '#7A3C24',
    bg: '#FFF6E5'
  }
};

/** 分值转化公式：原始分 10-40 转为 100 分制，保留整数。位置：本函数，在 setData 前调用。 */
function toScore100(rawScore) {
  return Math.round((rawScore / 40) * 100);
}

function getThemeByTitle(title) {
  return THEME_MAP[title] || THEME_MAP['安然清福型'];
}

function getResult(score) {
  const s = Math.max(10, Math.min(40, score));
  for (let i = 0; i < RESULT_MAP.length; i++) {
    const r = RESULT_MAP[i];
    if (s >= r.min && s <= r.max) return r;
  }
  return RESULT_MAP[0];
}

/**
 * 格式化日期为 2026-XX-XX
 */
function formatDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

Page({
  data: {
    score: 0,
    score100: 0,
    resultTitle: '',
    resultKeywords: '',
    resultSections: [],
    // 默认主题，防止首帧为空
    theme: THEME_MAP['安然清福型']
  },

  onLoad(options) {
    const fromRecord = options.fromRecord === '1';
    let score = wx.getStorageSync('fortune_score') || 0;
    let result;

    if (fromRecord) {
      const record = wx.getStorageSync(RECORD_KEY);
      if (record && record.resultTitle) {
        const score100 = record.score100 != null ? record.score100 : toScore100(record.score);
        this.setData({
          score: record.score,
          score100,
          resultTitle: record.resultTitle,
          resultKeywords: record.resultKeywords || '',
          resultSections: record.resultSections || [],
          theme: getThemeByTitle(record.resultTitle)
        });
        return;
      }
    }

    result = getResult(score);
    const score100 = toScore100(score);
    this.setData({
      score,
      score100,
      resultTitle: result.title,
      resultKeywords: result.keywords,
      resultSections: result.sections || [],
      theme: getThemeByTitle(result.title)
    });

    wx.setStorageSync(RECORD_KEY, {
      time: formatDate(),
      score,
      score100,
      resultTitle: result.title,
      resultKeywords: result.keywords,
      resultSections: result.sections || []
    });
  },

  // onShareAppMessage() {
  //   return {
  //     title: '我测了2026运势，也太准了！你也来试试～',
  //     path: '/pages/index/index',
  //     imageUrl: ''
  //   };
  // },

  // onShareTimeline() {
  //   return {
  //     title: '我测了2026运势，也太准了！你也来试试～',
  //     query: '',
  //     imageUrl: ''
  //   };
  // },

  onRetest() {
    wx.setStorageSync('fortune_score', 0);
    wx.redirectTo({
      url: '/pages/quiz/quiz?index=0'
    });
  },

  /**
   * 保存运势图：canvas 绘制 → 生成临时文件 → 保存到相册
   * 使用 wx.canvasToTempFilePath、wx.saveImageToPhotosAlbum；未授权时引导用户开启相册权限
   */
  // onSaveImage() {
  //   const that = this;
  //   wx.getSetting({
  //     success(res) {
  //       if (res.authSetting['scope.writePhotosAlbum']) {
  //         that.drawAndSave();
  //       } else {
  //         wx.authorize({
  //           scope: 'scope.writePhotosAlbum',
  //           success() { that.drawAndSave(); },
  //           fail() {
  //             wx.showModal({
  //               title: '保存图片需要相册权限',
  //               content: '请在设置中允许保存图片到相册，以便保存运势图。',
  //               confirmText: '去设置',
  //               success(s) {
  //                 if (s.confirm) wx.openSetting();
  //               }
  //             });
  //           }
  //         });
  //       }
  //     }
  //   });
  // },

  /**
   * 在 canvas 上绘制运势图（红金渐变背景+祥云+结果+二维码占位），再导出并保存到相册
   */
  drawAndSave() {
    wx.showLoading({ title: '生成中…' });
    const { score, resultTitle, resultKeywords, resultSections } = this.data;
    const ctx = wx.createCanvasContext('fortuneCanvas', this);

    // 1) 背景：红金线性渐变（顶部 #FFF5E6 → 底部 #FFE8CC）
    const bg = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
    bg.addColorStop(0, '#FFF5E6');
    bg.addColorStop(1, '#FFE8CC');
    ctx.setFillStyle(bg);
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // 2) 祥云：半透明金色圆
    ctx.setFillStyle('rgba(212, 175, 55, 0.12)');
    ctx.beginPath();
    ctx.arc(100, 120, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(500, 350, 70, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(120, 550, 60, 0, Math.PI * 2);
    ctx.fill();

    // 3) 顶部：“马到好运”艺术字 + 马年氛围
    ctx.setFillStyle('#D4AF37');
    ctx.setFontSize(38);
    ctx.setTextAlign('center');
    ctx.fillText('马到好运', CANVAS_W / 2, 72);
    ctx.setFontSize(28);
    ctx.fillText('马', CANVAS_W / 2, 115);

    // 4) 中部：白色卡片 + 运势结果（红金字体）
    const cardX = 40;
    const cardW = CANVAS_W - 80;
    ctx.setFillStyle('#FFFFFF');
    ctx.setStrokeStyle('#D4AF37');
    ctx.setLineWidth(2);
    ctx.beginPath();
    ctx.rect(cardX, 140, cardW, 320);
    ctx.fill();
    ctx.stroke();

    ctx.setFillStyle('#C8102E');
    ctx.setFontSize(28);
    ctx.setTextAlign('center');
    ctx.fillText('你的2026运势', CANVAS_W / 2, 175);
    ctx.setFontSize(32);
    ctx.fillText(resultTitle, CANVAS_W / 2, 218);
    ctx.setFillStyle('#555');
    ctx.setFontSize(22);
    ctx.fillText(resultKeywords, CANVAS_W / 2, 255);
    ctx.setFillStyle('#999');
    ctx.setFontSize(20);
    ctx.fillText('得分：' + score + ' 分', CANVAS_W / 2, 285);
    // 简要解读：只画前两条维度
    if (resultSections && resultSections.length > 0) {
      ctx.setFillStyle('#333');
      ctx.setFontSize(18);
      ctx.setTextAlign('left');
      let y = 320;
      for (let i = 0; i < Math.min(2, resultSections.length); i++) {
        const s = resultSections[i];
        ctx.fillText(s.label + '：' + (s.content || '').slice(0, 18) + '…', cardX + 20, y);
        y += 28;
      }
    }

    // 5) 底部右侧：小程序二维码占位（200x200px），左侧引导语
    ctx.setTextAlign('left');
    ctx.setFillStyle('#C8102E');
    ctx.setFontSize(24);
    ctx.fillText('扫码测你的2026运势', 50, 530);
    ctx.setFontSize(18);
    ctx.setFillStyle('#666');
    ctx.fillText('长按识别图中小程序码', 50, 558);

    // 二维码区域：占位 200x200px，右下角。替换为真实小程序码方法见下：
    // 1) 服务端生成带参小程序码（wxacode.getUnlimited 或 get），得到图片 URL 或 buffer；
    // 2) 本处用 ctx.drawImage(image, qrX, qrY, 200, 200) 绘制，image 需先 wx.getImageInfo 或 createImage 后 drawImage；
    // 3) 或先下载到临时路径，再 ctx.drawImage(tempPath, qrX, qrY, 200, 200)。注意 drawImage 为异步，需在 draw 前完成。
    const qrX = CANVAS_W - 200 - 40;
    const qrY = 500;
    ctx.setStrokeStyle('#D4AF37');
    ctx.setLineWidth(2);
    ctx.strokeRect(qrX, qrY, 200, 200);
    ctx.setFillStyle('#f5f5f5');
    ctx.fillRect(qrX + 2, qrY + 2, 196, 196);
    ctx.setFillStyle('#999');
    ctx.setFontSize(16);
    ctx.setTextAlign('center');
    ctx.fillText('替换为小程序二维码', qrX + 100, qrY + 100);

    // 6) 底部标注
    ctx.setFillStyle('#999');
    ctx.setFontSize(20);
    ctx.fillText('本测试仅供娱乐，好运靠自己～', CANVAS_W / 2, 750);

    ctx.draw(false, () => {
      wx.hideLoading();
      wx.canvasToTempFilePath({
        canvasId: 'fortuneCanvas',
        destWidth: CANVAS_W,
        destHeight: CANVAS_H,
        success(res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success() {
              wx.showToast({ title: '保存成功，快去朋友圈分享吧～', icon: 'none', duration: 2500 });
            },
            fail(err) {
              if (err.errMsg && err.errMsg.indexOf('auth') !== -1) {
                wx.showModal({
                  title: '需要相册权限',
                  content: '请到设置中允许保存图片到相册。',
                  confirmText: '去设置',
                  success(s) { if (s.confirm) wx.openSetting(); }
                });
              } else {
                wx.showToast({ title: '保存失败', icon: 'none' });
              }
            }
          });
        },
        fail() {
          wx.showToast({ title: '生成图片失败', icon: 'none' });
        }
      }, this);
    });
  }
});
