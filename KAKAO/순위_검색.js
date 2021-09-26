// Level 2
// 정확성 통과 , 효율성 실패
function solution(info, query) {
  const answer = [];
  const makeObj = (row) => {
    const splited = row.split(" ").filter((el) => {
      return el !== "and";
    });

    return {
      language: splited[0],
      position: splited[1],
      career: splited[2],
      soulfood: splited[3],
      score: splited[4],
    };
  };
  const keyList = ["language", "position", "career", "soulfood", "score"];
  const infoObj = info.map(makeObj);
  const queryObj = query.map(makeObj);

  const aux = (arr, condition, index) => {
    if (index === 5) return arr.length;
    const key = keyList[index];
    if (condition[key] === "-") return aux(arr, condition, index + 1);
    const filtered = arr.filter((el) => {
      if (index === 4) return Number(el[key]) >= Number(condition[key]);
      return el[key] === condition[key];
    });

    return aux(filtered, condition, index + 1);
  };

  return queryObj.map((el) => {
    return aux(infoObj, el, 0);
  });
}

/*
시간복잡도를 줄여봅세
*/
