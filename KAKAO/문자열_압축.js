// Level 2
// 통과
function solution(s) {
  const answer = [];

  const compress = (arr) => {
    let compressed = "";
    let count = 1;
    let ref = arr.shift();

    do {
      const el = arr.shift() || "";
      if (ref === el) {
        count++;
      } else {
        if (count === 1) {
          compressed += ref;
        } else {
          compressed += `${count}` + ref;
          count = 1;
        }
        ref = el;
      }
    } while (arr.length > 0);

    return count === 1 ? compressed + ref : compressed + `${count}` + ref;
  };

  const splitByIndex = (n) => {
    const splited = [];
    let left = 0;
    let right = n;
    for (let i = 1; i <= Math.ceil(s.length / n); i++) {
      splited.push(s.substring(left, right));
      left = right;
      right += n;
    }

    return compress(splited).length;
  };

  for (let i = 1; i <= s.length; i++) {
    answer.push(splitByIndex(i));
  }

  return Math.min(...answer);
}
