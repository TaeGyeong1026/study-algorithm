// Level 3
// 통과
function aux(computers, rowIdx, isVisited){
    computers[rowIdx].map((el, colIdx) => {
        if(!isVisited[colIdx] && el === 1){
            isVisited[colIdx] = true;
            return aux(computers, colIdx, isVisited);
        }
    })
}

function solution(n, computers) {
    const isVisited = Array(n).fill(false);
    let count = 0;
    
    for(let i = 0 ; i < n ; i++){
        if(!isVisited[i]){
            isVisited[i] = true;
            count++
            aux(computers, i, isVisited);
        }
    }
    
    return count;
}

/*
    코플릿의 그래프를 그룹화하는 문제를 떠올리며 DFS
*/