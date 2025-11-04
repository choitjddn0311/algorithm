// function solution(array) {
//     let a = array.join(" "); // array를 문자열로 합침
//     let b = a.split(""); // 합쳐진 문자열을 split을 통해 나눔
//     let count = 0; // 카운트 변수 선언
//     for(let i = 0; i < b.length; i++) { // 나눠진 문자열 즉 변수 b의 array만큼 반복 선언
//         if(b[i] == "7") { //만약 b의 index에 "7" 이 포함되어있다면 => 왜 문자열이냐? join으로 합쳤기때문
//             count ++; // count변수에 1씩 더한다
//         } 
//     }
//     return count; //최종적으로 count를 반환함
// }
function solution(array) {
    return array.join(" ").split('7').length-1;
    // array를 join한뒤 7을 array에서 제거함 ex) ["" , "" , "" , "1" , ""]
    // 위와 같이 array가 나눠지면 17 -> 1 과 7 이 되기때문에 array의 배열이 하나 증가함
    // 그래서 길이를 1 빼주면 된다
}