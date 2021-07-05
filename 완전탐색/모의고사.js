// Level 1
// 통과
function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let idx1 = 0;
    let idx2 = 0;
    let idx3 = 0;
    
    const answerCount = [0,0,0];
    
    const isOverflow = (idx, arr) => {
        idx++;
        if(idx >= arr.length) idx = 0;
        
        return idx;        
    }
    
    for(let i = 0 ; i < answers.length ; i++){
        if(p1[idx1] === answers[i]) answerCount[0]++;
        if(p2[idx2] === answers[i]) answerCount[1]++;
        if(p3[idx3] === answers[i]) answerCount[2]++;
        
        idx1 = isOverflow(idx1, p1);
        idx2 = isOverflow(idx2, p2);
        idx3 = isOverflow(idx3, p3);   
    }
    
    let max = Math.max(...answerCount);
    
    return answerCount.map((el, idx)=>{
        if(el === max){
            return idx+1;
        }
    }).filter((el)=>{
        return !!el;
    })
}

/*
쉬어가는 겸 완전탐색을 해보았음
다른 사람들의 풀이를 보니 더 줄일 수도 있는 방법들이 있음..
간단한 문제라 생각했는데 얼마나 간단히 푸냐가 중요했던듯?
*/