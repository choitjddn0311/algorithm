function solution(phone_number) {
    
    let change = phone_number.length - 4;
    let cover  = "*".repeat(change);
    
    let lastFour = phone_number.slice(-4);
    return cover + lastFour
}