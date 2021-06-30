// Level 2
// 통과
function solution(priorities, location) {
    let count = 0;

    while(location >= 0){
        const head = priorities.shift();
        const max = Math.max(...priorities);

        location--;

        if(max > head){
            priorities.push(head);

            if(location < 0){
                location = priorities.length-1
            }

        } else {
            count++;
        }        
    }
    
    return count;
}