function solution(n)
{
    let result = 0;
    let nStr = n.toString();
    let divide = nStr.split('');
    for(let i = 0; i < divide.length; i++) {
        let nNum = Number(divide[i]);
        result += nNum;
    }
    return result;
}