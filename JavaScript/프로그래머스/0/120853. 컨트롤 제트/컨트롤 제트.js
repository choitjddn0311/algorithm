function solution(s) {
    const a = s.split(" ");
    let aa=0;
    a.forEach((aaa,i) => {
        if(aaa === "Z") {
            aa -= Number(a[i-1]);
        } else {
            aa += Number(aaa);
        }
    })
    return  aa;
}