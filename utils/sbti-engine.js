const { NORMAL, SPECIAL, norm } = require('./sbti-personalities.js');

const DIM_ORDER = [
  'S1', 'S2', 'S3', 'E1', 'E2', 'E3', 'A1', 'A2', 'A3',
  'Ac1', 'Ac2', 'Ac3', 'So1', 'So2', 'So3'
];

const HML_TO_NUM = { H: 3, M: 2, L: 1 };

function letterFromSum(sum) {
  if (sum >= 1) return 'H';
  if (sum <= -1) return 'L';
  return 'M';
}

function userStringFromScores(scores) {
  return DIM_ORDER.map((d) => letterFromSum(scores[d] || 0)).join('');
}

function toNumArray(str15) {
  const s = norm(str15);
  const out = [];
  for (let i = 0; i < 15; i++) {
    const ch = s[i];
    out.push(HML_TO_NUM[ch] || 2);
  }
  return out;
}

function compareUserToPattern(userStr, patternStr) {
  const a = toNumArray(userStr);
  const b = toNumArray(patternStr);
  let d = 0;
  let exact = 0;
  for (let i = 0; i < 15; i++) {
    const diff = Math.abs(a[i] - b[i]);
    d += diff;
    if (diff === 0) exact += 1;
  }
  const similarity = Math.max(0, (1 - d / 30) * 100);
  return { d, exact, similarity: Math.round(similarity * 10) / 10 };
}

function rankNormals(userStr) {
  const rows = NORMAL.map((p) => {
    const { d, exact, similarity } = compareUserToPattern(userStr, p.pattern);
    return {
      code: p.code,
      displayCode: p.displayCode,
      name: p.name,
      tagline: p.tagline,
      pattern: p.pattern,
      d,
      exact,
      similarity
    };
  });
  rows.sort((x, y) => {
    if (x.d !== y.d) return x.d - y.d;
    if (x.exact !== y.exact) return y.exact - x.exact;
    if (x.similarity !== y.similarity) return y.similarity - x.similarity;
    return 0;
  });
  return rows;
}

function maxSimilarity(rows) {
  if (!rows.length) return 0;
  return rows[0].similarity;
}

function allBelowThreshold(rows, threshold) {
  return rows.every((r) => r.similarity < threshold);
}

/**
 * @param {Record<string, number>} scores 各维 -2..2 累加
 * @param {{ drunkForced?: boolean }} flags
 */
function computeResult(scores, flags) {
  const drunkForced = !!(flags && flags.drunkForced);
  if (drunkForced) {
    const sp = SPECIAL.DRUNK;
    return {
      primary: { ...sp, similarity: null, d: null, exact: null, isSpecial: true },
      userString: userStringFromScores(scores),
      dimensionScores: { ...scores },
      ranked: rankNormals(userStringFromScores(scores)),
      reason: 'drunk'
    };
  }

  const userString = userStringFromScores(scores);
  const ranked = rankNormals(userString);
  const maxSim = maxSimilarity(ranked);

  if (allBelowThreshold(ranked, 60)) {
    const sp = SPECIAL.HHHH;
    return {
      primary: { ...sp, similarity: maxSim, d: null, exact: null, isSpecial: true },
      userString,
      dimensionScores: { ...scores },
      ranked,
      reason: 'hhhh'
    };
  }

  const top = ranked[0];
  return {
    primary: {
      code: top.code,
      displayCode: top.displayCode,
      name: top.name,
      tagline: top.tagline,
      similarity: top.similarity,
      d: top.d,
      exact: top.exact,
      isSpecial: false
    },
    userString,
    dimensionScores: { ...scores },
    ranked,
    reason: 'normal'
  };
}

function formatUserStringPretty(userString) {
  const s = norm(userString);
  if (s.length !== 15) return userString;
  return [
    s.slice(0, 3),
    s.slice(3, 6),
    s.slice(6, 9),
    s.slice(9, 12),
    s.slice(12, 15)
  ].join('-');
}

module.exports = {
  DIM_ORDER,
  letterFromSum,
  userStringFromScores,
  compareUserToPattern,
  rankNormals,
  computeResult,
  formatUserStringPretty
};
