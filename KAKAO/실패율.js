// Level 1
// 통과
function solution(N, stages) {
  const result = [];
  const counter = new Array(N + 1).fill(0);
  let user = stages.length;

  stages.forEach((stage) => {
    counter[stage - 1]++;
  });

  counter.forEach((count, index) => {
    const tried = user;
    const failed = count;

    result.push([index + 1, failed / tried]);

    user -= failed;
  });

  return result
    .slice(0, N)
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      if (a[1] === b[1]) return 0;
    })
    .map((el) => el[0]);
}

/*

1 1    >>> try 8 fail 1 success 7 
2 111  >>> try 7 fail 3 success 4
3 11   >>> try 4 fail 2 success 2
4 1    >>> try 2 fail 1 success 1
5      >>> try 1 fail 0 success 1
6 1    >>> try 1 fail 1 success 0

N n    >>> try (remain - fail[N-1]) fail n success try - fail
*/
