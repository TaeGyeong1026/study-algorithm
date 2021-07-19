// Level 1
// 통과
function solution(n) {
    let result = 0;
    
    for(let i = 1 ; i * i <= n ; i++){
        if(n % i === 0) {
            result += i;
            if((n / i) !== i) result += (n / i);
        }        
    }
    
    return result;    
}