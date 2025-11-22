function solution(num_list) {
    // 제곱 변수 생성
    let square = 0;
    // 합계 변수 생성
    let sum = 0;
    // 원소들의 합 변수 생성 (1인 이유 => 모든 수의 0을 곱하면 0이 되기때문)
    let multi = 1;
    // num_list를 n으로 순회함
    num_list.forEach(n => {
        // sum에 순회하는 n의값을 더함
        sum += n;
        // multi에 순회하는 n의 값을 곱함
        multi *= n;
        // 최종적으로 square의 합의 제곱을 저장
        square = sum*sum;
    })
    // // 만약 합의 제곱의 원소의 곱보다 크면
    // if(multi < square) {
    //     // 1반환
    //     return 1;
    //     // 합의 제곱이 원소의 곱보다 작으면
    // } else if(multi > square) {
    //     // 0 반환
    //     return 0;
    // }
    // 3항 연산자로 요약
    return multi < square ? 1 : 0;
}