// function solution(num, k) {
//     // 숫자를 문자열로 바꾼뒤 나눔
//     let numStr = num.toString().split("");
//     // k가 있는 index번호를 찾음
//     let point = numStr.indexOf(k.toString());
//     // 정수로 전환해 -1 이 아닐때
//     if(Number(point) !== -1) {
//         // 그 값을 반환함. 1을 더하는 이유는 index는 0번부터 시작하기 때문
//         return point + 1;
//     } else {
//         // 아닌 경우 -1 반환
//         return -1;
//     }
// }

// 또 다른 풀이

function solution(num,k) {
    // num을 문자열로 바꾼뒤 indexOf로 K의 위치를 찾음 (문자열도 indexOf를 사용할 수 있음)
    // indexOf가 반환하는 값이 숫자이기에 실제론 문자열이 아님 
    let a = num.toString().indexOf(k);
    console.log(typeof a);
    // 삼항연산자를 활용해 - 1일때 -1 반환하고 아닐땐 a에 1더해서 반환
    return a == -1 ? -1 : a+1;
}