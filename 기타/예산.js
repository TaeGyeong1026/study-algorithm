// Level 1
// 통과
function solution(d, budget) {
    d.sort((a, b) => a - b);
    let used = 0;
    let count = 0;
    
    while(d[0] + used <= budget){
        used += d.shift();
        count++;
    }
    
    return count;
}

