function solution(rsp) {
    const a = {2 : 0, 0 : 5, 5 : 2};
    return [...rsp].map(b => a[b]).join('')
}