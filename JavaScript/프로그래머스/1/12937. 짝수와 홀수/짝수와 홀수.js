function solution(num) {
    // // 짝수니까 2로 나누었을때 나머지가 0이면 Even return
    // if(num%2 === 0) {
    //     return "Even"
    // } else {
    //     return "Odd"
    // }
    
    // 삼항연산자도 쌉가능
    return num%2 === 0 ? "Even" : "Odd";
}