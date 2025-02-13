function solution(i, j, k) {
    let a = ''
    for(i; i<=j; i++){
        a += i;
    }
    let b = a.split(k).length-1;
    return b;
}