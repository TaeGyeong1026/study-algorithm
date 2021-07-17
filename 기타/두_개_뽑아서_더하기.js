// Level 1
// 통과
function solution(numbers) {
    const isVisit = {};
    const result = [];
    
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i + 1 ; j < numbers.length ; j++){
            const sum = numbers[i] + numbers[j];
            if(!isVisit[sum]) {
                isVisit[sum] = true;
                result.push(sum);
            }
        }
    }
    
    result.sort((a, b) => a - b);
    
    return result;
}