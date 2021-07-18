// Level 1
// 통과
function solution(arr){
    let prev = -1;
    const result = [];
    for(let el of arr){
        if(el !== prev){
            result.push(el);
            prev = el;
        } 
        
    }
    
    return result;
}