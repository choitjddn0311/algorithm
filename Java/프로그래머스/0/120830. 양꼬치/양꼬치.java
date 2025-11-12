class Solution {
    public int solution(int n, int k) {
//         양꼬치 가격 변수 설정
        int nn = n*12000;
//         양꼬치 갯수 / 10을 해 서비스 음료수 갯수를 구함
        int s = n/10;
//         마신 음료에서 서비스를 제외한 후 가격을 곱해줌
        int kk = (k-s) * 2000;
//         리턴
        return nn + kk;
    }
}