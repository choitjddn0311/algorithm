function solution(strlist) {
    //for문으로 array가 하나씩 계속 생기기에 array를 밖에 선언
        let a = [];
    //for문으로 i값이 strlist의 length까지 증가할때 하나씩 늘어나게 해서 인덱스 번호를 찾고 
    //인덱스번호를 찾은 후 그 문자열의 길이를 length를 통해 잰 후 a array에 push
    for(let i = 0; i<strlist.length;i++){
        a.push(strlist[i].length);
    }
    //return 해준다
    return a;
}