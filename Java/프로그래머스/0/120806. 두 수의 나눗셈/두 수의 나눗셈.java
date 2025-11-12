class Solution {
    public int solution(int num1, int num2) {
//         java에서 정수의 나누기를 할때에는 소숫점이 날아가서 double로 자료형을 선언해야함
//         선언할 수 있는 자료형은 float와 double가 있지만 float는 리터럴에 f를 붙여야함 ex) float a = 1
//         변수 선언후 앞쪽에 (double) , (int)는 임시로 선언을 해주기에 계산할때 유리함 
        double divided = (double) num1/num2;
//         다시 int로 선언해 곱해줌
        int updateNum = (int) (divided*1000);
//         리턴
        return updateNum;
    }
}