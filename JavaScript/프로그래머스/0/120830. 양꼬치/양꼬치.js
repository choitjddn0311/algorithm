function solution(n,k){
    const yang = n*12000;
    const service = Math.floor(n/10);
    const can = (k-service) * 2000;
    return yang + can;
}