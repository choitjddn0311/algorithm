function solution(a, b) {
    let num1 = a.toString() + b.toString();
    let num2 = 2 * a * b;
    if(Number(num1) < num2) {
        return num2
    } else if(Number(num1) > num2) {
        return Number(num1);
    } else if(Number(num1) == num2) {
        return Number(num1);
    }
}