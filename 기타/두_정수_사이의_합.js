// Level 1
// 통과
function solution(a, b) {
    let result = 0;
    const start = a > b ? b : a;
    const end = a > b ? a : b;
    
    for(let i = start ; i <= end ; i++){
        result += i;
    }
    
    return result;
}