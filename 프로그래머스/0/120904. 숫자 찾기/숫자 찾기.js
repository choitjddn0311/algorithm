function solution(num, k) {
    // 숫자를 문자열로 바꾼뒤 나눔
    let numStr = num.toString().split("");
    // k가 있는 index번호를 찾음
    let point = numStr.indexOf(k.toString());
    // 정수로 전환해 -1 이 아닐때
    if(Number(point) !== -1) {
        // 그 값을 반환함. 1을 더하는 이유는 index는 0번부터 시작하기 때문
        return point + 1;
    } else {
        // 아닌 경우 -1 반환
        return -1;
    }
}