// Level 1
// 정확도, 효율성 통과
function solution(participant, completion) {
    const obj = {};
    
    completion.forEach(el=>{
      if(el in obj){
        obj[el]++;
      } else {
        obj[el] = 1;               
      }
    });
    
    for(let el of participant){
      if(obj[el]){
        if(obj[el] !== 0){
          obj[el]--;
        } else {
          return el;
        }
      } else {
        return el;
      }
    }
}

/*
정확도 통과
효율성 실패

function solution(participant, completion) {
    while(completion.length > 0){
        const head = completion.shift();
        const idx = participant.indexOf(head);
        
        participant.splice(idx,1)
    }
    
    return participant[0];
}
*/