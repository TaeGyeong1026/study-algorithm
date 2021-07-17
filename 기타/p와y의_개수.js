// Level 1
// 통과
function solution(s){
    const pCount = s.replace(/[^p]/gi,"").length;
    const yCount = s.replace(/[^y]/gi,"").length;
    
    return pCount === yCount ? true : false;
}