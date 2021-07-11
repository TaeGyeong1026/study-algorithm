// Level 3
// 50% 통과
function solution(tickets) {
    const list = {};
    const path = ["ICN"];
    
    tickets.sort();
    
    for (let [from, to] of tickets){
        if(!list[from]) list[from] = [to];
        else list[from].push(to);
    }
    
    // for (let from in list){
    //     if(list[from].length !== 1) list[from].sort();
    // }
    
    const queue = [];
    const enqueue = (el) => queue.push(el);
    const dequeue = () => queue.shift();
    
    enqueue(list["ICN"].shift());
    
    while(queue.length > 0){
        const from = dequeue();
        
        path.push(from);
        
        
        if(!list[from] || list[from].length === 0) break;
        
        enqueue(list[from].shift());
    }
    
    return path;
}

// 결과를 도출하는 정렬이 잘못된 것 같은데 테스트 케이스를 더 돌려봐야 알 것 같다

// 또는 DFS로 풀어봐야겠다.