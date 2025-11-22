function solution(a, b) {
    let num1 = Number(a.toString() + b.toString());
    let num2 = 2 * a * b;
    if(num1 < num2) {
        return num2
    } else if(num1 > num2) {
        return num1;
    } else if(num1 == num2) {
        return num1;
    }
}