// Level2
// 통과
function solution(citations) {
    const N = citations.length;
    let h = N;
    let max = 0;
    while(h > 0){
        const validNum = citations.filter((el)=>{
            return el >= h;
        }).length;
        
        if(validNum >= h) break;
        h--;
    }
    
    return h;
}

// 5, 5번이상 논문이 5편 이상? X
// 4, 4번이상 논문이 4편 이상? X
// 3, 3번이상 논문이 3편 이상? O return