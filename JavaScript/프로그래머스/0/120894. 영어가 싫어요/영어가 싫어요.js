function solution(numbers) {
    let array = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    array.forEach((a,b) => {
        numbers = numbers.split(a).join(b)})
    
    return Number(numbers);
}