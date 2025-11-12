function solution(my_string) {
    let findNum = my_string.replace(/[^0-9]/g, "");
    let sum = 0;
    for(let i = 0; i < findNum.length; i++) {
        sum += Number(findNum[i]);
    }
    return sum;
}
