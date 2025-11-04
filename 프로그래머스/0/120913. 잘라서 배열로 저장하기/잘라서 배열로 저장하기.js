function solution(my_str, n) {
    let array = []; //array변수 선언
    for(let i = 0; i < my_str.length; i += n) { 
        // i 가 0부터 my_str의 length보다 커지기 직전까지 반복문을 돌때마다 i에 n을 더해줌
        array.push(my_str.slice(i,i+n)); 
        // array에 i값부터 i+n값까지 자른 문자열을 push함
    }
    return array;
}