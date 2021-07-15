// Level 1
// 통과
function solution(new_id) {
    let str = new_id.toLowerCase();
    
    str = str.replace(/[^a-z\d\.\-\_]/g, '');
    str = str.replace(/\.{2,}/g, '.');
    str = str.replace(/(^\.)|(\.$)/g,'');
    
    if(str === '') str += 'a';
    if(str.length >= 16) {
        str = str.slice(0, 15);
        str = str.replace(/\.$/,'');
    }
    
    while (str.length <= 2){
        str += str[str.length - 1];
    }
    
    return str;   
    
}