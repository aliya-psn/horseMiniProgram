const RESULT_MAP = [
  {
    min: 10,
    max: 18,
    title: '安然清福型',
    keywords: '2026关键词：平安、恬淡、心安',
    keywordsArr: ['平安', '恬淡', '心安'],
    tags: ['平安是福', '心静自然凉', '小确幸', '稳稳当当'],
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '流年安稳，无波无澜，守住当下便是最好的财运。不求大起大落，只求稳稳当当。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '性情温和，人缘清净，家人和睦，知己相伴。虽无惊天贵人，却有长久温情。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '身心舒畅，少病少忧。生活节奏舒缓，日子清淡却满是幸福感。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '守好心，走好路。平淡即是真，安稳即是福。' }
    ]
  },
  {
    min: 19,
    max: 24,
    title: '温润进阶型',
    keywords: '2026关键词：踏实、成长、小成',
    keywordsArr: ['踏实', '成长', '小成'],
    tags: ['稳步上升', '贵人渐现', '小财不断', '步步为营'],
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '稳步上升，付出就有回报。财运慢慢积累，小财不断，细水长流。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '待人真诚，贵人渐现。身边会出现愿意拉你一把的人，助你少走弯路。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '精力充足，状态渐好。生活慢慢变好，一切都在往理想方向走。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '坚持住，慢慢来。你走的每一步，都在靠近好运。' }
    ]
  },
  {
    min: 25,
    max: 30,
    title: '吉运盈门型',
    keywords: '2026关键词：顺心、旺运、小富',
    keywordsArr: ['顺心', '旺运', '小富'],
    tags: ['运势上扬', '贵人显形', '喜事常来', '机会之年'],
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
    keywordsArr: ['红火', '顺遂', '显贵'],
    tags: ['事业突破', '财运旺盛', '贵人铺路', '心想事成'],
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
    keywordsArr: ['显贵', '乘风', '大成'],
    tags: ['贵人运爆棚', '事业开挂', '财运上涨', '机会之年'],
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
    keywords: '2026关键词：天选、旺运、大成',
    keywordsArr: ['天选', '旺运', '大成'],
    tags: ['势不可挡', '贵人如云', '名利双收', '万事尽在掌握'],
    sections: [
      { label: '事业/财运', icon: 'career', iconChar: '◆', content: '势不可挡，一顺百顺。事业名利双收，财运亨通，所求皆得。' },
      { label: '人际/贵人', icon: 'relation', iconChar: '●', content: '众星捧月，贵人如云。逢凶化吉，遇难成祥，走到哪里都是福运中心。' },
      { label: '健康/生活', icon: 'health', iconChar: '♥', content: '身心俱佳，光彩照人。生活充满惊喜与幸福，万事尽在掌握。' },
      { label: '年度建议', icon: 'suggestion', iconChar: '★', content: '你就是自己最好的风水。大胆实现所有愿望，今年属于你。' }
    ]
  }
];

const RECORD_KEY = 'fortune_last_record_v2'; // 本地存储：最近一次测试记录；改 key 即弃用旧数据
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
  const s = Math.max(10, Math.min(40, rawScore));
  return Math.round(((s - 10) / 30) * 100);
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

/** 随机 80~95 的百分比，用于「超过 xx% 用户」 */
function randomPercentile() {
  return 80 + Math.floor(Math.random() * 16);
}

/** 根据 result 生成分享文案 */
function getShareCopy(type) {
  const copyMap = {
    '安然清福型': '2026年平安恬淡，心安即是福！',
    '温润进阶型': '2026年踏实成长，小成在望！',
    '吉运盈门型': '2026年顺心旺运，喜事常来！',
    '鸿运当头型': '2026年红火顺遂，贵人铺路！',
    '天赐贵气型': '2026年贵人相助，事业腾飞！',
    '巅峰旺运型': '2026年势不可挡，万事尽在掌握！'
  };
  const line = copyMap[type] || '2026年好运连连！';
  return `我测出了「${type}」运势！${line}快来测测你的运势！`;
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
    resultKeywordsArr: [],
    resultTags: [],
    resultPercentile: 88,
    resultSections: [],
    theme: THEME_MAP['安然清福型'],
    showPosterPreview: false,
    posterPreviewUrl: '',
    generatingPoster: false
  },

  onLoad(options) {
    const fromRecord = options.fromRecord === '1';
    let score = Number(wx.getStorageSync('fortune_score') || 10);
    let resultRow;
    let result;

    if (fromRecord) {
      const record = wx.getStorageSync(RECORD_KEY);
      if (record && (record.result || record.resultTitle)) {
        if (record.result) {
          result = record.result;
          const percentile = result.percentile != null ? result.percentile : randomPercentile();
          this.setData({
            score: result.score,
            score100: result.score100,
            resultTitle: result.type,
            resultKeywords: (result.keywords || []).join(' · '),
            resultKeywordsArr: result.keywords || [],
            resultTags: result.tags || [],
            resultPercentile: percentile,
            resultSections: record.resultSections || [],
            theme: getThemeByTitle(result.type)
          });
        } else {
          const score100 = record.score100 != null ? record.score100 : toScore100(record.score);
          const kwStr = record.resultKeywords || '';
          const keywordsArr = kwStr ? kwStr.replace(/^2026关键词[：:]\s*/, '').split(/[、·]/).map(s => s.trim()).filter(Boolean) : [];
          const resultRow = getResult(record.score);
          const tags = resultRow.tags || [];
          this.setData({
            score: record.score,
            score100,
            resultTitle: record.resultTitle,
            resultKeywords: keywordsArr.length ? keywordsArr.join(' · ') : kwStr,
            resultKeywordsArr: keywordsArr.length ? keywordsArr : [kwStr],
            resultTags: tags,
            resultPercentile: randomPercentile(),
            resultSections: record.resultSections || [],
            theme: getThemeByTitle(record.resultTitle)
          });
        }
        return;
      }
    }

    resultRow = getResult(score);
    const score100 = toScore100(score);
    const keywordsArr = resultRow.keywordsArr || [];
    const tags = resultRow.tags || [];
    result = {
      type: resultRow.title,
      score,
      score100,
      keywords: keywordsArr,
      tags,
      percentile: randomPercentile()
    };

    this.setData({
      score,
      score100,
      resultTitle: result.type,
      resultKeywords: keywordsArr.join(' · '),
      resultKeywordsArr: keywordsArr,
      resultTags: tags,
      resultPercentile: result.percentile,
      resultSections: resultRow.sections || [],
      theme: getThemeByTitle(result.type)
    });

    wx.setStorageSync(RECORD_KEY, {
      time: formatDate(),
      result,
      resultSections: resultRow.sections || []
    });
  },

  onShareAppMessage() {
    const title = getShareCopy(this.data.resultTitle);
    return {
      title,
      path: '/pages/home/home?p=fortune'
    };
  },

  onShareTimeline() {
    const title = getShareCopy(this.data.resultTitle);
    return { title, query: '' };
  },

  /** 生成运势海报：显示金粉加载动效，再绘制 canvas，生成后展示预览 */
  onSaveImage() {
    this.setData({ generatingPoster: true });
    this.drawAndSave();
  },

  /** 关闭海报预览 */
  onClosePosterPreview() {
    this.setData({ showPosterPreview: false, posterPreviewUrl: '' });
  },

  /** 在预览中点击「保存到相册」：需相册权限，首次会弹系统授权；拒绝则引导去设置 */
  onSavePosterToAlbum() {
    const url = this.data.posterPreviewUrl;
    if (!url) return;
    wx.saveImageToPhotosAlbum({
      filePath: url,
      success: () => {
        wx.showToast({ title: '已保存到相册', icon: 'success' });
        this.setData({ showPosterPreview: false, posterPreviewUrl: '' });
      },
      fail: (err) => {
        if (err.errMsg && err.errMsg.indexOf('auth') !== -1) {
          wx.showModal({
            title: '需要相册权限',
            content: '保存图片到相册需要您授权。请到设置中开启「保存到相册」权限。',
            confirmText: '去设置',
            success(s) {
              if (s.confirm) wx.openSetting();
            }
          });
        } else {
          wx.showToast({ title: '保存失败', icon: 'none' });
        }
      }
    });
  },

  onRetest() {
    wx.setStorageSync('fortune_score', 0);
    wx.redirectTo({
      url: '/pages/quiz/quiz?index=0'
    });
  },

  /**
   * 绘制分享海报：重设计布局，留白充足、层次清晰、适合保存到手机
   * 画布 600*800。结构：顶栏 → 运势卡片（居中）→ 扫码文案（居中）→ 二维码（居中）→ 免责
   */
  drawAndSave() {
    const that = this;
    const resultTitle = this.data.resultTitle || '吉运盈门型';
    const resultKeywordsArr = this.data.resultKeywordsArr || [];
    const resultSections = this.data.resultSections || [];
  
    const w = 600;
    const h = 800;
  
    const drawPoster = (qrImagePath) => {
      const ctx = wx.createCanvasContext('fortuneCanvas', that);
  
      // ---------- 背景 ----------
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#FFF8F0'); 
      bg.addColorStop(1, '#FDF5EE');
      ctx.setFillStyle(bg);
      ctx.fillRect(0, 0, w, h);
  
      // ---------- 顶部标题 ----------
      ctx.setFillStyle('#C8102E');
      ctx.setFontSize(28);
      ctx.setTextAlign('center');
      ctx.fillText('马到成功 · 2026运势测试', w / 2, 50);
  
      // ---------- 运势标题 ----------
      ctx.setFillStyle('#FFD700');
      ctx.setFontSize(32);
      ctx.fillText(resultTitle, w / 2, 120);
  
      // ---------- 关键词 ----------
      const kwStartY = 160;
      let kwX = 40;
      let kwY = kwStartY;
      const kwPadding = 14;
      const kwLineHeight = 38;
      ctx.setFontSize(18);
      resultKeywordsArr.forEach((kw) => {
        const textWidth = ctx.measureText(kw).width + kwPadding * 2;
        if (kwX + textWidth > w - 40) {
          kwX = 40;
          kwY += kwLineHeight;
        }
        ctx.setFillStyle('#FFE4B5'); 
        ctx.fillRect(kwX, kwY - 20, textWidth, 28);
        ctx.setFillStyle('#C8102E');
        ctx.fillText(kw, kwX + textWidth / 2, kwY);
        kwX += textWidth + 10;
      });
  
      // ---------- 四维度解读 ----------
      const sectionStartY = kwY + 50;
      ctx.setFontSize(16);
      const sectionHeight = 40; 
      const sectionSpacing = 12;
      resultSections.slice(0, 4).forEach((s, i) => {
        const secY = sectionStartY + i * (sectionHeight + sectionSpacing);
        const contentText = (s.content || '').slice(0, 40); // 一行显示尽量完整
        // 背景块
        ctx.setFillStyle('#FFF4E6');
        ctx.fillRect(40, secY - 22, w - 80, sectionHeight);
        // 标签
        ctx.setFillStyle('#C8102E');
        ctx.setTextAlign('left');
        ctx.fillText(s.label + '：', 50, secY);
        // 内容
        ctx.setFillStyle('#444444');
        ctx.fillText(contentText + ((s.content || '').length > 40 ? '…' : ''), 160, secY);
      });
  
      // ---------- 扫码区 ----------
      const qrY = sectionStartY + 4 * (sectionHeight + sectionSpacing) + 40;
      ctx.setTextAlign('center');
      ctx.setFillStyle('#C8102E');
      ctx.setFontSize(22);
      ctx.fillText('扫码测你的 2026 运势', w / 2, qrY);
      ctx.setFillStyle('#666666');
      ctx.setFontSize(16);
      ctx.fillText('看看今年能不能顺风顺水发小财', w / 2, qrY + 24);
  
      // ---------- 二维码 ----------
      const qrSize = 180;
      const qrX = (w - qrSize) / 2;
      const qrPosY = qrY + 50;
      ctx.setFillStyle('#FFFFFF');
      ctx.fillRect(qrX, qrPosY, qrSize, qrSize);
      ctx.setStrokeStyle('#D4AF37');
      ctx.setLineWidth(3);
      ctx.strokeRect(qrX, qrPosY, qrSize, qrSize);
      if (qrImagePath) {
        ctx.drawImage(qrImagePath, qrX + 8, qrPosY + 8, qrSize - 16, qrSize - 16);
      }
      ctx.setFillStyle('#C8102E');
      ctx.setFontSize(18);
      ctx.fillText('长按识别', w / 2, qrPosY + qrSize + 28);
  
      // ---------- 底部提示 ----------
      ctx.setFillStyle('#A67C00');
      ctx.setFontSize(14);
      ctx.fillText('已有 1 万+ 人测出吉运', w / 2, qrPosY + qrSize + 50);
      ctx.setFillStyle('#999999');
      ctx.setFontSize(12);
      ctx.fillText('本测试仅供娱乐，好运靠自己～', w / 2, qrPosY + qrSize + 68);
  
      // ---------- 绘制完成 ----------
      ctx.draw(false, () => {
        setTimeout(() => {
          wx.canvasToTempFilePath({
            canvasId: 'fortuneCanvas',
            destWidth: w,
            destHeight: h,
            success: (res) => {
              that.setData({
                showPosterPreview: true,
                posterPreviewUrl: res.tempFilePath,
                generatingPoster: false
              });
            },
            fail: () => {
              that.setData({ generatingPoster: false });
              wx.showToast({ title: '生成图片失败', icon: 'none' });
            }
          }, that);
        }, 100);
      });
    };
  
    drawPoster('qrcode.jpg');
  }
});
