function solution(n) {
    // 숫자 => 문자열로 변경 후 array형식으로 자르기
    let nStr = n.toString().split('');
    // reverse함수를 통해 순서변경 후 map으로 숫자로 바꿈
    // 여기서 map(Number) == map(x => Number(x))와 같음
    // 결국 nStr이 뒤집힌 걸 순회해서 Number로 바꿔줌
    let reversed = nStr.reverse().map(Number);
    // 반환
    return reversed;
}