function solution(s) {
    let r = [];
    
    // c가 s를 하나씩 출력함 ex) hello -> h , e , l , l , o
    for(let c of s) {
        // c에서 하나씩 s에 있는 index값과 lastIndex값이 같다면 array에 push
        if(s.indexOf(c) == s.lastIndexOf(c)) {
            r.push(c);
        }
    }
    // 사전 순으로 정렬한뒤 묶어서 문자열로
    return r.sort().join('');
}