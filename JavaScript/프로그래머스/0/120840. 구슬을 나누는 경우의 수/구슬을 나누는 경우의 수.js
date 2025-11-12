function solution(balls, share) {
    let a = 1;
    while(share) {
        a *= balls/share;
        balls--;
        share--;
    } 
    return Math.round(a);
}