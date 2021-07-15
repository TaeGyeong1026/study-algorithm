// Level 1
// 통과
function solution(n, lost, reserve) {
    const students = Array(n).fill(1);
    const uniq = lost.filter((el)=>{
        return !reserve.includes(el)
    });
    
    for(let el of reserve){
        students[el - 1] = 2;
    }
    
    for(let el of lost){
        students[el - 1]--;
    }
    
    for(let el of uniq){
        if(students[el - 2] === 2){
            students[el - 2] = 1;
            students[el - 1] = 1;
            continue;
        }
        
        if(students[el] === 2){
            students[el] = 1;
            students[el - 1] = 1;
            continue;
        }
        
        students[el - 1] = 0;
    }
    
    return n - students.filter((el) => {
        return el === 0;
    }).length;
}

/*
reserve이면서 lost이면 빌려줄 수 없고, 빌려올 필요가 없다고 판단하여 겹치지 않는 인원들만 구했음

그 후 학생들이 보유하고 있는 체육복의 수를 구해놓음

그 후 lost와 reserve가 겹치지 않는 인원들로 빌리기(?) 시작

이게 Level 1이 맞나..ㅋㅋ
딱히 좋은 방법이 떠오르지 않아서 무작정 반복문을 돌렸다..

*/