function solution(my_string) {
    // 정규식을 통해서 소문자 a~z까지 대문자A~Z까지 split함수로 나눔
    let first = my_string.split(/[a-zA-Z]/g);
    // 그 나눈 array를 reduce를 통해서 값을 더해감 + a + + c 앞에 +를 붙인 이유는 array에서 
    // 문자열이기때문에 숫자로 변환해 더하기 위해서 이다
    // Number()를 써도 된다
    let second = first.reduce((a,c) => +a + +c, 0);
    return second;
}