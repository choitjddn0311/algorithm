function solution(array) {
    let a = array.join(" "); // array를 문자열로 합침
    let b = a.split(""); // 합쳐진 문자열을 split을 통해 나눔
    let count = 0; // 카운트 변수 선언
    for(let i = 0; i < b.length; i++) { // 나눠진 문자열 즉 변수 b의 array만큼 반복 선언
        if(b[i] == "7") { //만약 b의 index에 "7" 이 포함되어있다면 => 왜 문자열이냐? join으로 합쳤기때문
            count ++; // count변수에 1씩 더한다
        } 
    }
    return count; //최종적으로 count를 반환함
}