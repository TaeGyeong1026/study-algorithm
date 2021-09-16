// Level 2
// 통과
function solution(w, h) {
  const bigger = w > h ? w : h;
  const smaller = w < h ? w : h;
  const findGCF = (n, m) => {
    if (m % n === 0) {
      return n;
    } else {
      return findGCF(m % n, n);
    }
  };
  const GCF = findGCF(smaller, bigger);

  return w * h - (w / GCF + h / GCF - 1) * GCF;
}

/*
 가로와 세로 길이의 최대 공약수 만큼 패턴이 반복된다
 
 패턴의 크기는 각 가로와 세로를 최대 공약수로 나눈 만큼의 크기를 가진다
 
 예) 12 * 8의 직사각형
 최대 공약수 = 4, 4번의 패턴 반복
 패턴의 크기는 12 /4 = 3, 8 /4 = 2, 3*2 크기만큼의 패턴
 
 패턴에서 잘리는 크기는 w+h-1
 3+2-1
 
 패턴을 찾자
*/
