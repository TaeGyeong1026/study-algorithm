// Level 2
// 통과
function solution(brown, yellow) {
    const result = [];
    
    for(let i = 1; i * i <= yellow; i++) {
        const row = [];
        if (yellow % i == 0) {
            if (i * i < yellow) {
                row.push(yellow/i);
            } 
            row.push(i)
            result.push(row);
        } 
    }
    
    for(let el of result) {
        const width = el[0] + 2;
        const height = el.length === 1 ? el[0] + 2 : el[1] + 2;
        const size = width * height;
        
        if(size - brown === yellow){
            return [width, height];
        }        
    }

}

/*

brown yellow
10 2

yellow의 약수를 구해야 함
brown 개수를 검증해서 나온 공약수의 값에 각 +2한 값이 답임
어떻게 검증하나?
구한 전체크기 - yellow의 크기 = brown의 크기여야 함

brown yellow
24 24

24의 약수
width >= height
6 > 4 >> 6*4 >> width +2, height +2 8*6 48-24 = 24 >> brown의 개수
8 > 3 >> 8*3 >> 10*5 >> 50 - 24 = 26
12 > 2 >> 12*2 >> 14*4 = 56 - 24 = 32
24 > 1 >> 24*1 >> 26*3 = 78 - 24 = 54

다른 사람들의 풀이를 보고 깨달은 점
사실 brown+yellow의 약수를 구했으면 훨씬 간단함 ㅋㅋ
*/