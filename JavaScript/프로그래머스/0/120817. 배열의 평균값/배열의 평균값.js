function solution(numbers) {
    const a = numbers.reduce((c,b) => c+b) / numbers.length;
    return a;
}