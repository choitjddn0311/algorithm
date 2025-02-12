function solution(my_string) {
    let a = [...my_string].filter((v) => !isNaN(v));
    let b = a.map((v) => parseInt(v)).sort(); 
    return b;
}