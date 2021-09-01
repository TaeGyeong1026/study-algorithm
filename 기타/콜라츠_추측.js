// Level 1
// 통과
function solution(num) {
  const aux = (num, count) => {
    if (num === 1) return count;
    if (count > 500) return -1;

    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;

    return aux(num, count + 1);
  };

  return aux(num, 0);
}

/*
 DFS 활용
*/
