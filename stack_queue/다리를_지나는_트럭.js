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

/*
    다소 비효율적일 수 있겠다고 생각 중 다른 사람들의 풀이를 보니

    중간에 무게를 초과하는 경우에 시간만 증가하는 부분을 상당히 단축시킨 경우들을 보았다. 대단한 사람들..
*/