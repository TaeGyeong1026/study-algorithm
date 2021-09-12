// Level 1
// 통과
function solution(x) {
  return (
    x %
      String(x)
        .split("")
        .reduce((acc, el) => {
          return acc + Number(el);
        }, 0) ===
    0
  );
}
