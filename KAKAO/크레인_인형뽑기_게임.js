// Level 1
// 통과
function solution(board, moves) {
    const rotated = [];
    
    for(let i = 0 ; i < board.length ; i++){
        const row = [];
        for(let j = board.length - 1; j >= 0  ; j--){
            if(board[j][i] === 0) break;
            row.push(board[j][i]);
        }
        rotated.push(row);
    }
    
    const stack = [];
    let count = 0;
    
    for(let move of moves){
        let current = rotated[move-1].pop();
        let top = stack[stack.length-1];
        
        if(top === current) {
            count += 2;
            stack.pop();
        } else{
            if(!!current) stack.push(current);    
        }
    }
    
    return count;
}

/*
다음과 같이 배열이 주어지므로
 0 - 0 0 0 0 0
 1 - 0 0 1 0 3
 2 - 0 2 5 0 1
 3 - 4 2 4 4 2
 4 - 3 5 1 3 1

 회전이 필요함
 0 - 3 4 0 0 0 
 1 - 5 2 2 0 0
 2 - 1 4 5 1 0
 3 - 3 4 0 0 0
 4 - 1 2 1 3 0

 0이 있을 필요가 없음
 0 - 3 4  
 1 - 5 2 2 
 2 - 1 4 5 1 
 3 - 3 4 
 4 - 1 2 1 3

 집게가 집을 때마다 pop 수행

 pop한 값이 stack의 top과 같으면 
 - stack에 push하지 않음
 - stack의 top을 pop
 - 한번에 2개씩 사라지므로 count ++ 2

 moves 끝까지 진행

 빈 곳에 move가 있는 경우가 있음
 - undefined가 반환되므로, 조건 필요
*/