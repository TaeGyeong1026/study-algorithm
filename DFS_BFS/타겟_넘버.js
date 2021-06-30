// Level 2
// 시간 초과 75% 성공
function solution(numbers, target) {
    const queue = [];
    const enqueue = (el) => queue.push(el);
    const dequeue = () => queue.shift();
    const N = numbers.length;
    let count = 0;
    
    enqueue([[numbers[0]], numbers[0], 1]);
    enqueue([[-numbers[0]], -numbers[0], 1]);
    
    while(queue.length > 0){
        const [arr, sum, idx] = dequeue();
        
        if(arr.length < N){
            enqueue([[...arr, numbers[idx]], sum+numbers[idx], idx+1]);
            enqueue([[...arr, -numbers[idx]], sum-numbers[idx], idx+1]);
        } else {
            if(sum === target){
                count++;
            }
        }
    }
    
    return count;
}