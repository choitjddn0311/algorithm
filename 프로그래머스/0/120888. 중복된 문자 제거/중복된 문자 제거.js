function solution(my_string) {
    let answer = '';
    for(let i = 0; i < my_string.length; i++) {
        if(i === my_string.indexOf(my_string[i])){
            answer += my_string[i];
        }
    }
    return answer;
}