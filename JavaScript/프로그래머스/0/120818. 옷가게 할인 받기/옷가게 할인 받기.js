function solution(price) {
    let discount = 0;

    if (price >= 500000) {
        discount = 0.2; // 20% 할인
    } else if (price >= 300000) {
        discount = 0.1; // 10% 할인
    } else if (price >= 100000) {
        discount = 0.05; // 5% 할인
    }

    // 할인 적용 후 지불 금액 계산
    return Math.floor(price * (1 - discount));
}