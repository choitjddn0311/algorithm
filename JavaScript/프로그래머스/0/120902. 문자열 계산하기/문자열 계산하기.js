function solution(my_string) {
    // 문자열 나눔
    const array = my_string.split(" ");
    
    // array의 첫번째 숫자 저장
    let a = Number(array[0]);
    
    console.log(array);
    
    //foreach문을 통해 돌림
    array.forEach((e,i) => {
        // array안에  + 가 있으면
        if(e === "+") {
            // 첫번째 숫자에 Number로 array있는 숫자를 더한다
            // 여기서 1을 더하는 이유는 연산 부호 뒷 숫자를 계산해야하기때문이다
            a += Number(array[i + 1]);
        }
        // array안에 - 가 있으면
        if(e === "-") {
            // 첫번째 숫자에 Number로 array있는 숫자를 뺀다
            // 1을 더하는 이유도 같다
            a -= Number(array[i + 1]);
        }
    })
    return a;
}