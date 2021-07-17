// Level 1
// 통과
function solution(left, right) {
    
    const evenChecker = (n) => {
        const result = [];
        for(let i = 1 ; i * i <= n ; i++){
            if(n % i === 0) {
                result.push(i);
                if(i*i < n) result.push(n/i);
            }
        }
        
        return result.length % 2 === 0 ? true : false;
    }
    
    let result = 0;
    
    for(let i = left ; i <= right ; i++){
        if(evenChecker(i)) result += i;
        else result -= i;
    }
    
    return result;
}

/*
약수를 구해서 개수가 짝수인지 홀수인지 확인하고
짝수면 결과에 더하고, 홀수면 결과에서 뺀다
isInteger를 통해 짝수, 홀수를 간편히 구분하는 코드도 보았다.. 신기함
*/