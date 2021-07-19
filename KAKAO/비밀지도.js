// Level 1
// 통과
function solution(n, arr1, arr2) {
    const dec1 = [];
    const dec2 = [];
    
    const aux = (arr, dec) => {
        for(let i = 0 ; i < n ; i++){
            let decode = arr[i].toString(2);
        
            dec.push('0'.repeat(n - decode.length) + decode);
        }    
    }
    
    aux(arr1, dec1);
    aux(arr2, dec2);
    
    const result = [];
    
    for(let i = 0 ; i < n ; i++){
        let row = '';
        for(let j = 0 ; j < n ; j++){
            if(dec1[i][j] === '1' || dec2[i][j] === '1') row += '#';
            else row += ' ';
        }
        result.push(row);
    }
    
    return result;
}