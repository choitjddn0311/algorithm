function solution(chicken) {
    // 서비스로 받을 수 있는 치킨의 수
    let count = 0;
    // 치킨의 수가 10개보다 같거나 많을때 while문 입장
    while(chicken >= 10) {
        // 새로운 치킨의 개수를 소수점 제거해서 변수생성
        let newChicken = Math.floor(chicken / 10);
        
        // 서비스 치킨 수의 추가
        count += newChicken;
        
        // 현재 남은 치킨 = 서비스 치킨 + 남은 쿠폰 갯수 (남으면 다시 while문으로)
        chicken = newChicken + (chicken % 10);
    } 
    // 반환
    return count;
}