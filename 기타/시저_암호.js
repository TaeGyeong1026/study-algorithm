// Level 1
// 통과
function solution(s, n) {
    return s.split('').map(el => {
        let code = el.charCodeAt(el);
        
        if( el === ' ') return ' ';
        
        if( code >= 65 && code <= 90 ){
            if(code + n > 90) code = code + n - 26;
            else code = code + n;
        } else {
            if(code + n > 122) code = code + n - 26;
            else code = code + n;
        }
        
        return String.fromCharCode(code);
    }).join('');
}