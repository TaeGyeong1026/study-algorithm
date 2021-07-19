// Level 1
// 통과
function solution(s) {
    return s.split('').sort((a, b) => {
        return (a < b) - (a > b);
    }).join('');    
}