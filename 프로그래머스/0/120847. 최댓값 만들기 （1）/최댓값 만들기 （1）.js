function solution(numbers) {
    let a = numbers.sort((a,b)=>a-b)
    let l = a.length-1;
    return numbers[l]*numbers[l-1];
}