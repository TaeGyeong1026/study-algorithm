// Level 1
// 통과
function solution(array, commands) {
    const result = [];
    for(let [i, j, k] of commands){
        const sliced = array.slice(i-1, j).sort((a,b)=>a-b);
        result.push(sliced[k-1]);
    }
    
    return result;
}