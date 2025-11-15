function solution(arr, divisor) {
    // 결과를 담을 array 생성
    let resultArray = [];
    // array를 순회하는 forEach문 시작
    arr.forEach(a => {
        // array의 요소 하나씩 divisor와 나눌때 나머지가 0이면
        if(a%divisor == 0) {
            // 생성한 array에 a값 pusn
            resultArray.push(a);
        }
    });
    
    // 삼항연산자 사용해서
    // array의 길이가 1보다 작으면 ? [-1] 을 반환하고 : 아니면 array를 오름차순으로 반환함
    return resultArray.length < 1 ? [-1] : resultArray.sort((a,b) => a-b);
}