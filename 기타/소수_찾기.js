// Level 1
// 통과
function solution(n) {
    let count = 0;
    const prime = Array(n + 1).fill(false);
    
    for(let i = 2 ; i <= n ; i++){
        if(prime[i]) continue;
        
        count++;
        
        for(let j = i * i ; j <= n ; j = j + i){
            prime[j] = true;
        }        
    }
    
    return count;
}

/*
    에라토스테네스의 체
    해당 수가 소수인 경우 그 배수들을 제외시킨다
*/