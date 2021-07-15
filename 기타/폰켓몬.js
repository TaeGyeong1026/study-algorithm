// Level 1
// 통과
function solution(nums) {
    const list = {};
    
    for(let num of nums){
        if(!list[num]) list[num] = [num];
        else list[num].push(num);
    }
    
    const count = Object.keys(list).length;
    const half = parseInt(nums.length / 2);
    
    return count > half ? half : count;
}

/*
입력받은 nums의 종류의 수만큼 다 고를 수 있다면 그게 답

입력받은 nums의 1/2보다 그 종류의 수가 많다면 고를 수 있는 것의 최대 값은 nums 길이의 반

다른 사람들 풀이를 보니 new Set()을 쓴다 뭘까!

Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다

유일한 객체를 찾는 문제에서 한번 사용해봐야겠다

중복 값을 없앨 때 좋은 듯?
*/