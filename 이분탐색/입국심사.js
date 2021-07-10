// Level 3
// 통과
function solution(n, times) {
    let max = Math.max(...times) * n;
    let min = 1;
    
    const aux = (min, max, prevMaxTime) => {
        let maxTime = 0;
        let mid = parseInt((max + min) / 2);
        let people = 0;
        
        if(min >= max) return prevMaxTime;

        for(let i = 0 ; i < times.length ; i++){
            let validCnt = parseInt(mid / times[i]);
            let validTime = validCnt * times[i];
            if(validTime > maxTime) maxTime = validTime;
            people += validCnt;
        }

        if(people === n) return maxTime;
        if(people > n) return aux(min, mid - 1, maxTime);
        if(people < n) return aux(mid + 1, max, maxTime);
    }
    
    return aux(min, max, 0);
}

/*
시간 복잡도
function solution(n, times) {
    let max = Math.max(...times) * n;
    let min = 1;
    
    const aux = (min, max) => {
        let mid = parseInt((max + min) / 2);
        let people = 0;
        
        if(min >= max) return mid;

        for(let i = 0 ; i < times.length ; i++){
            people += parseInt(mid / times[i]);
        }

        if(people === n) return mid;
        if(people > n) return aux(min, mid - 1);
        if(people < n) return aux(mid + 1, max);
    }
    
    return aux(min, max);
}
*/