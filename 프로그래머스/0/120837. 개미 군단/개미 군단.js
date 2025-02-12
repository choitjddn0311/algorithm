function solution(hp) {
    let a = Math.floor(hp / 5); //5로 나눈 몫
    let b = Math.floor((hp - a * 5) / 3); // 남은 값에서 3으로 나눈 몫
    let c = hp - a * 5 - b * 3; // 나머지 값
    return a+b+c; // 다 더함
}