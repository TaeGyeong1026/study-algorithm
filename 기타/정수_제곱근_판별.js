// Level 1
// 통과
function solution(n) {
    const sqrt = Math.sqrt(n);
    if(Number.isInteger(sqrt)) return Math.pow(sqrt + 1, 2);
    else return -1;
}