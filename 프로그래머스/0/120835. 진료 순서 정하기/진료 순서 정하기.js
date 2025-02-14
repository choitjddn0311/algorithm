function solution(emergency) {
    let sA = emergency.slice().sort((a,b) => b-a);
    let answer = emergency.map(c => sA.indexOf(c)+1);
    return answer;
}