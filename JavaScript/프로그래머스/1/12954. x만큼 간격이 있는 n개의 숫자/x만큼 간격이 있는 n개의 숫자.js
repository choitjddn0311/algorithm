function solution(x, n) {
    let arr = [];
    let a = 0;
    for(let i = 0; i < n; i++) {
        arr.push(a+=x)
    }
    return arr;
}