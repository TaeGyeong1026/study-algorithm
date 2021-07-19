// Level 1
// 통과
function solution(s) {
    return s.split(' ').map(el => {
        return el.split('').map((el, idx) => {
            return idx % 2 !== 0 ? el.toLowerCase() : el.toUpperCase();
        }).join('');
    }).join(' ');
}