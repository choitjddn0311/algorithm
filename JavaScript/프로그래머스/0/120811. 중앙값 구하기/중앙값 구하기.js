function solution(array) {
    // sort함수는 순서대로 정렬함, 이같은 경우엔 a,b가 있고 a-b가 0보다 작으면 a가 앞 ,크면 b가 앞 같으면 그냥 놔둔다
    array.sort((a,b) => a-b);
    // array의 length를 재서 나누기 2를 해준뒤 소숫점을 처리해주면 중앙값의 인덱스 번호가 나온다
    let answer = Math.floor(array.length/2);
    return array[answer];
    
}
