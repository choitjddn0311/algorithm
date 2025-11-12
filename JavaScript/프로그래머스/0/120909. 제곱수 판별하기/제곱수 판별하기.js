function solution(n) {
    let a = Math.sqrt(n);
    
    if(a == Math.floor(a)){
        return 1;
    } else {
        return 2;
    }
}