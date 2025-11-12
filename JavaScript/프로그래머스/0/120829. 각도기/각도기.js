function solution(angle){
    const n = 90;
    if(angle < n) {
        return 1;
    } else if(angle == n) {
        return 2;
    } else if(angle > n && angle < n*2) {
        return 3;
    } else {
        return 4;
    }
}