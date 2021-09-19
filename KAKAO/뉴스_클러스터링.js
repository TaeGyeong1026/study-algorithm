// Level 2
// 통과
function split(s) {
  const arr = [];
  const count = {};
  for (let i = 0; i < s.length - 1; i++) {
    const splited = s.toUpperCase().substring(i, i + 2);
    if (!splited.match(/[\d\W_]/g)) {
      if (!count[splited]) {
        count[splited] = 1;
      } else {
        count[splited]++;
      }
      arr.push(splited + count[splited]);
    }
  }

  return arr;
}

function solution(str1, str2) {
  const splited1 = split(str1);
  const splited2 = split(str2);

  if (splited1.length === 0 && splited2.length === 0) {
    return 65536;
  }

  const union = [...new Set([...splited1, ...splited2])];
  const inter = splited1.filter((el) => {
    return splited2.includes(el);
  });

  return parseInt((inter.length / union.length) * 65536);
}

/*
자카드 유사도
두 집합의 교집합 크기를 합집합 크기로 나눈 값!
*/
