function solution(array) {
    let o = [...array];
    let up = array.sort((a,b) => a-b);
    let index = array.length-1;
    return [up[index],o.indexOf(up[index])];
}