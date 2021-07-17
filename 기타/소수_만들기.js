// Level 1
// 통과
function solution(nums) {
    const isPrime = (n) => {
       if(n === 1) return false;
       
       for(let i = 2 ; i * i <= n ; i++){
           if(n % i === 0) return false;
       }
       
       return true;
   }
    
   let count = 0;
   const memo = [];
   
   for(let i = 0 ; i < nums.length ; i++){
       for(let j = i + 1 ; j < nums.length ; j++){
           for(let k = j + 1 ; k < nums.length ; k++){
               const sum = nums[i] + nums[j] + nums[k];
               if(isPrime(sum)){
                 count++;  
               } 
           }
       }
   }
   
   return count;
}

/*
 예전에 코플릿에서 푼
 카드 3개를 뽑아서 소수를 찾는 문제를 떠올림
*/