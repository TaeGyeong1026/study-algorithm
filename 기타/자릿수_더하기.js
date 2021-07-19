// Level 1
// 통과
function solution(n){
    return String(n).split('').reduce((acc, el)=>{
       return acc + Number(el); 
    }, 0)
}