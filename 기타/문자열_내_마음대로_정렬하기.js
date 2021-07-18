// Level 1
// 통과
function solution(strings, n) {
    strings.sort((a, b) => {
        if(a[n] === b[n]){
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        } else {
            if(a[n] > b[n]) return 1;
            if(a[n] < b[n]) return -1;
            return 0;            
        }
    })
    
    return strings;
}