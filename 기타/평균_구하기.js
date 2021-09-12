// Level 1
// 통과
function solution(arr) {
  return (
    arr.reduce((acc, el) => {
      return acc + el;
    }) / arr.length
  );
}
