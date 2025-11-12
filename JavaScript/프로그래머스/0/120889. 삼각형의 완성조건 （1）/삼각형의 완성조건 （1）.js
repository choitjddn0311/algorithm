function solution(sides) {
    //sort함수를 통해 오름차순으로 배열
    const num = sides.sort((a,b)=> a-b);
    //array의 길이를 재서 인덱스번호의 맞춰 -1
    const last = sides.length-1;
    //if문으로 작은 두 변의 합이 가장 긴 변보다 작거나 같으면 return 2
    if(sides[last] >= sides[0] + sides[1]){
        return 2;
    } else {
        //아니면 return 1
        return 1;
    }
}
