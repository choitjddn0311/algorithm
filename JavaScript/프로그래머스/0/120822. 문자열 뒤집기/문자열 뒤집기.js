function solution(my_string) {
    // a변수 선언 후 my_string을 split으로 나눠주고 reverse로 순서를 뒤바꾼다
    let a = my_string.split('').reverse();
    // 그 후 join ''으로 split으로 나누어졌던 array를 다시 string으로 바꿔주고
    let j = a.join('')
    //return한다
    return j;
}