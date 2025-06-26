class Solution {
    public int solution(int age) {
//         년도 변수 설정
        int year = 2022;
//      제한 사항에 걸리지 않게 if문 설정
        if(age >= 0 && age <= 120) {
//          태어난 년도부터 1살이기에 1 추가
            return year-age+1;   
        } else {
//           테스트케이스가 age에 제한사항을 넘어갈경우 -1 반환
            return -1;
        }
    }
}