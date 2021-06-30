// Level 2
// 통과 
function solution(progresses, speeds) {
    const result = [];

    while(progresses.length > 0){
        let count = 0;

        for(let i = 0 ; i < progresses.length ; i++){
            progresses[i] += speeds[i];
        }

        while(progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            count++;
        }
        
        if(count !== 0){
            result.push(count);
        }
    }
    
    return result;
}
