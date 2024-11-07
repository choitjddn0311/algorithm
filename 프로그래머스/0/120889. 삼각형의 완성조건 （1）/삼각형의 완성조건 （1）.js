function solution(sides) {
    const num = sides.sort((a,b)=> a-b);
    const last = sides.length-1;
    if(sides[last] >= sides[0] + sides[1]){
        return 2;
    } else {
        return 1;
    }
}