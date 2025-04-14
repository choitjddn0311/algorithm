function solution(n) {
    let i = 1;
    let f = 1;

    while (f * (i + 1) <= n) {
        i++;
        f *= i;
    }

    return i;
}
