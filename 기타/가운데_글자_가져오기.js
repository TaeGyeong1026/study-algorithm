// Level 1
// 통과
function solution(s) {
    const N = s.length;
    const HALF = parseInt(N/2);
    if(N % 2 === 0){
        return s[HALF - 1] + s[HALF];
    } else {
        return s[HALF];
    }
}