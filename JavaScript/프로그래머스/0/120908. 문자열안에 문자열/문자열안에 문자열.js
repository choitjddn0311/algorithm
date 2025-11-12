// function solution(str1, str2) {
//     let s1 = str1.split('')
//     let s2 = str2.split('')
//     if(s1 == s2 || s1 = s2){
//         return 1;
//     } else {
//         return 2;
//     }
// }

function solution(str1,str2){
    //includes함수는 문자열에 같은게 포함되어있는지 확인하는 함수
    //즉 str1에 str2가 포함되어있으면 1반환 아니면 2반환
    if(str1.includes(str2)){
        return 1;
    }else {
        return 2;
    }
}
//위에 주석처리된 문제: split으로 잘라서 비교할려고 했으나 조금 부족하다 조금 더 알아볼것