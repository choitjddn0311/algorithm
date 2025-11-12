function solution(arr) {
    let plusAll = 0;
    let result = 0;
    let arrLength = arr.length;
    arr.forEach(a => {
        plusAll += a;
        result = plusAll/arrLength
        
    })
    return result
}