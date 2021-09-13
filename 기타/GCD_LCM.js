// Level 1
// 통과
function calcGCD(n, m) {
  if (m % n === 0) {
    return n;
  } else {
    return calcGCD(m % n, n);
  }
}

function solution(n, m) {
  const GCD = calcGCD(n, m);
  const LCM = (n * m) / GCD;

  return [GCD, LCM];
}

/*
유클리드 호제법으로 GCD 최대 공약수를 구하고
LCM은 두 자연수의 곱 나누기 최대 공약수로 구함

이때 유클리드 호제법은
큰 수를 작은 수로 나누어 떨어진다면, 나눈 작은수가 최대 공약수
나누어 떨어지지 않는다면, 큰 수를 작은 수로 나눈 나머지로 작은 수를 나눔
위 조건을 반복
*/
