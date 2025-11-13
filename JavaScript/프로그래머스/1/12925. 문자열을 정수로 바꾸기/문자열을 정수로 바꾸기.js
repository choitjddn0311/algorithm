function solution(s) {
    if(typeof s == "number") {
        return s.toString()
    } else if(typeof s == "string") {
        return Number(s);
    }
}