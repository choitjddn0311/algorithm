function solution(n) {
    let array = new Set();
    for(let i = 2; i <= n; i++) {
        while(n%i === 0){
            array.add(i);
            n /= i;
        }
    }
    return [...array];
}