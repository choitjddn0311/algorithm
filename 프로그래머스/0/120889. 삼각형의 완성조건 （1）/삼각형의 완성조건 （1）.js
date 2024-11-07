function solution(sides) {
    const num = sides.sort((a,b)=> a-b);
    const last = sides.length;
    if(sides[last-1] >= sides[0] + sides[1]){
        return 2;
    } else {
        return 1;
    }
}