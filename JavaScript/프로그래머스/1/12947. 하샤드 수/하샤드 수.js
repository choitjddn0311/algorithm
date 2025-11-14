function solution(x) {
    let sum = 0;
    // 문자열로 바꿔 나눔
    let divideNum  = x.toString().split("");
    
    //forEach를 통해 array를 순회해 sum에 더함
    divideNum.forEach(d => {
        sum += Number(d);
    })
    // 결과적으로 x 나누기 sum을 했을때 0이면
    if(x%sum == 0) {
        // true 리턴
        return true;
    } else {
        // 아니면 false 리턴
        return false;
    }
}