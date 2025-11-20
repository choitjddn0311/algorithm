function solution(num_list) {
    let numLength = num_list.length;
    if(num_list[numLength-1] > num_list[numLength-2]) {
        num_list.push(num_list[numLength-1] - num_list[numLength-2]);
    } else {
        num_list.push(num_list[numLength-1]*2);
    }
    return num_list
}