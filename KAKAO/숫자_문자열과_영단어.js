// Level 1
// 통과
function solution(s) {
    const list = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9
    };
    let arr = s.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/g, el => list[el]);
    return Number(arr);    
}

/*
카카오는 문자열과 관련된게 많은 느낌..?
덕분에 잘 안쓰던 메소드도 찾아 쓰게되어 좋다
*/