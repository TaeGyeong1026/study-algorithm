// Level 1
// 통과
function solution(weights, head2head) {
  const fightInfo = [];

  function calcRatio(current, h2h) {
    let total = 0,
      win = 0,
      heavierCount = 0;

    h2h.split("").forEach((el, index) => {
      if (el === "W" || el === "L") {
        total++;
        if (el === "W") {
          if (weights[index] > current) heavierCount++;
          win++;
        }
      }
    });

    return total === 0 ? [0, 0] : [win / total, heavierCount];
  }

  for (let i = 0; i < weights.length; i++) {
    const [winR, heavierCount] = calcRatio(weights[i], head2head[i]);
    fightInfo.push([i + 1, winR, heavierCount, weights[i]]);
  }

  return fightInfo
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (b[1] > a[1]) return 1;

      if (a[1] === b[1]) {
        if (a[2] > b[2]) return -1;
        if (b[2] > a[2]) return 1;

        if (a[2] === b[2]) {
          if (a[3] > b[3]) return -1;
          if (b[3] > a[3]) return 1;
          if (a[3] === b[3]) return 0;
        }
      }
    })
    .map((el) => {
      return el[0];
    });
}
