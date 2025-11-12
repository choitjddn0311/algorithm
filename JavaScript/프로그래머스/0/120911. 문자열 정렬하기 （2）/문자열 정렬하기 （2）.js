function solution(my_string) {
    let low = my_string.toLowerCase();
    return low.split('').sort().join('');
}