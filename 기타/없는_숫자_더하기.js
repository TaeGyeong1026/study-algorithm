// Level 1
// 통과
function solution(numbers) {
  const ref = new Array(10).fill(false);

  numbers.forEach((number) => {
    ref[number] = true;
  });

  return ref
    .map((number, index) => {
      return !number ? index : null;
    })
    .reduce((acc, number) => {
      return acc + number;
    });
}
