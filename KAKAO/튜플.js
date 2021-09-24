// Level 2
// 통과
function solution(s) {
  return [
    ...new Set(
      s
        .substring(2, s.length - 2)
        .replace(/\}\,\{/g, "/")
        .split("/")
        .map((el) => {
          return el.split(",").map((el) => {
            return Number(el);
          });
        })
        .sort((a, b) => {
          return a.length - b.length;
        })
        .flat()
    ),
  ];
}
