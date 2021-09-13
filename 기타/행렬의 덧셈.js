// Level 1
// 통과
function solution(arr1, arr2) {
  const N = arr1.length;
  const M = arr1[0].length;
  const answer = arr1.slice();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}
