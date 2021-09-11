// Level 1
// 통과
function grade(score){
    if(score >= 90) return "A";
    else if(score >= 80 && score < 90) return "B";
    else if(score >= 70 && score < 80) return "C";
    else if(score >= 50 && score < 70) return "D";
    else return "F";
}

function solution(scores) {
    let answer = "";
    
    for(let i = 0 ; i < scores.length ; i++){
        const scoreArr = [];
        let sum = 0;
        let count = 0;
        
        for(let j = 0 ; j < scores[i].length ; j++){
            scoreArr.push(scores[j][i]);
            sum += scores[j][i];
            count++;
        }
        
        const MAX = Math.max(...scoreArr);
        const MIN = Math.min(...scoreArr);
        const maxArr = scoreArr.filter((el)=>{
            return el === MAX;
        });
        const minArr = scoreArr.filter((el)=>{
            return el === MIN;
        });
        
        if((scoreArr[i] === MAX && maxArr.length === 1)|| (scoreArr[i] === MIN && minArr.length === 1)){
            sum -= scoreArr[i];
            count--;
        }
        
        const AVG = sum / count;
        answer += grade(AVG);        
    }
    
    return answer
}