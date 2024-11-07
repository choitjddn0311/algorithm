function solution(sides) {
    //sort함수를 통해 오름차순으로 배열
    const num = sides.sort((a,b)=> a-b);
    //array의 길이를 재서 인덱스번호의 맞춰 -1
    const last = sides.length-1;
    //if문 야매로 해서 return
    if(sides[last] >= sides[0] + sides[1]){
        return 2;
    } else {
        return 1;
    }
}
