function solution(s) {
    let sLower = s.toLowerCase();
    return (sLower.split("p").length === sLower.split("y").length);
}
