// Level 2
// 통과
function isPrime(num){    
    if (num === 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    let sqrt = parseInt(Math.sqrt(num));
    
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (num % divider === 0) {
        return false;
      }
    }
    return true;    
}

function DFS(num, numbers, idx, count, isVisited, isPicked){
    const N = numbers.length;
    
    if(idx > N) return count;
    
    isPicked[idx] = true;
    num = num + numbers[idx];
    num = Number(num);
    
    if(!isVisited[num]){
        isVisited[num] = true;
        if(isPrime(num)) count++;        
    }
    num = String(num);
    
    for(let i = 0; i < N; i++){
        if(!isPicked[i]){
            count = DFS(num, numbers, i, count, isVisited, [...isPicked]);
        }
    }
    
    return count;
}

function solution(numbers) {
    const N = numbers.length;
    const isVisited = new Array(Math.pow(10,N)).fill(false);
    const isPicked = new Array(N).fill(false);
    let count = 0;
    
    for(let i = 0 ; i < numbers.length ; i++){
        count += DFS('', numbers, i, 0, isVisited, [...isPicked]);
    }
    
    return count;
}