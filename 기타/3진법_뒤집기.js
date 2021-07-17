// Level 1
// 통과
function solution(n) {
    let reversed = '';
    
    while(n > 2){
        reversed += n % 3;
        n = parseInt(n / 3);
    }
    
    reversed += n;
    let multi = 1;
    let result = 0;
    
    for(let i = reversed.length - 1 ; i >= 0 ; i--){
        result += reversed[i] * multi;
        multi *= 3;
    }
    
    return result;
}

/*
parseInt를 쓰면 끝나네...?
*/
