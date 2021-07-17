// Level 1
// 통과
function solution(numbers, hand) {
    const distOfPointer = ([x1, y1], [x2, y2]) => {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }
    
    const pointer = [
        [3, 1], // 0
        [0, 0], [0, 1], [0, 2], //1 2 3
        [1, 0], [1, 1], [1, 2], //4 5 6
        [2, 0], [2, 1], [2, 2], // 7 8 9
    ];
    
    let prevL = [3, 0], 
        prevR = [3, 2];
    
    const accumulate = (side, acc, el) => {
        if(side === 'L'){
            prevL = pointer[el];
            return acc + 'L';
        } else {
            prevR = pointer[el];
            return acc + 'R';
        }
    }
    
    return numbers.reduce((acc, el) => {
        if(el === 1 || el === 4 || el === 7) return accumulate('L', acc, el);
        else if(el === 3 || el === 6 || el === 9) return accumulate('R', acc, el);
        else {
            const curr = pointer[el];
            const d1 = distOfPointer(curr, prevL);
            const d2 = distOfPointer(curr, prevR);
            
            if(d1 === d2) {
                if(hand === 'left') return accumulate('L', acc, el);
                else return accumulate('R', acc, el);
            }
            
            if(d1 < d2) return accumulate('L', acc, el);
            else return accumulate('R', acc, el);
        }
    }, '');
}

/*
로직을 짜는 것을 어렵지 않았다

그런데 두 버튼 간 거리를 구하는 것을 피타고라스 정리를 통해 실제 거리를 구해버려서 헤맸음..

이동 거리는 상하좌우 1칸씩 이동하는 그 거리를 말하는 것이었음

X좌표 이동량, Y좌표 이동량을 통해서 구할 수 있었음
*/