function solution(numbers, direction) {
    let answer = numbers
    if(direction == "right"){
        let r = answer.pop();
        answer.unshift(r);
        return answer;
    }
    if(direction == "left"){
        let l = answer.shift();
        answer.push(l);
        return answer;
    }
}