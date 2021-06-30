// Level 2
// 통과
function solution(bridge_length, weight, truck_weights) {
    const queue = new Array(bridge_length).fill(0);
    const enqueue = (el) => queue.push(el);
    const dequeue = () => queue.shift();
    let second = 0;
    let curWeight = 0;
    
    do {
        second++;
        curWeight -= dequeue();

        if(truck_weights[0] + curWeight <= weight){
            curWeight += truck_weights[0];
            enqueue(truck_weights.shift());
        } else {
            enqueue(0);
        }
    } while(curWeight > 0)
    
    return second;
}