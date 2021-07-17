// Level 1
// 통과
function solution(lottos, win_nums) {
    let hitNum = 0;
    let unknownNum = 0;
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    for(let i = 0 ; i <= 6 ; i++){
        if(lottos[i] === 0) unknownNum++;
        if(lottos.includes(win_nums[i])) hitNum++;
    }
    
    return [ rank[hitNum + unknownNum], rank[hitNum] ];
}

/*
최고 순위는 원래 맞춘 숫자에 알 수 없었던 번호를 모두 맞출 경우(hitNum + unkownNum)
최저 순위는 원래 맞춘 숫자에 알 수 없었던 번호를 모두 틀릴 경우(hitNum + 0)
*/