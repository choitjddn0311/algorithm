function solution(array, n) {
    array.sort((a,b) => a - b); //오름차순 정렬
    let diff = array.map(v => Math.abs(v-n)); // array에 있는 요소와 n을 빼준다
    // Math.min(...diff) 스프레드 함수를 통해 diff array에 있는 가장 작은 요소를 가져옴
    // 그 다음 diff array에 스프레드 함수로 가져온 인덱스 번호를 찾은뒤
    // 그 번호를 array[]에서 입력하면?
    // 값이 충족되서 나온다
    return array[diff.indexOf(Math.min(...diff))]; 
    
}