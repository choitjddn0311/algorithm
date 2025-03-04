function solution(n) {
    let a = [];
    for(let i=1;i<=n;i++){
        for(let j=2;j<i;j++){
            if(i%j==0){
                a.push(i)
            }
        }
    }
    return [...new Set(a)].length
}