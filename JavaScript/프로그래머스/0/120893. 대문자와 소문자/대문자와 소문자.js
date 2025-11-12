function solution(my_string) {
    let r = '';
    for(let i =0; i<my_string.length; i++){
        const c = my_string[i];
        
        if(c == c.toUpperCase()){
            r += c.toLowerCase();
        } else {
            r += c.toUpperCase();
        }
    }
    return r;
}
