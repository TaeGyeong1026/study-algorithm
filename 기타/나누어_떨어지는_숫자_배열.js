// Level 1
// 통과
function solution(arr, divisor) {
    const result = arr.filter(el => el % divisor === 0);
    result.sort((a, b) => a - b);
    return result.length === 0 ? [-1] : result;
}