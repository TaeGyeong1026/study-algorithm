// Level 1
// 통과
function solution(arr) {
    const MIN = Math.min(...arr);
    const result = arr.filter(el => {
        return el !== MIN;
    });
    
    return result.length === 0 ? [-1] : result;
}