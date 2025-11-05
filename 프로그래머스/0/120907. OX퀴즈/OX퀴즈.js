function solution(quiz) {
    let a = [];
    quiz.forEach(q => {
        let array = q.split(" ");
        if(array[1] == "-") {
            if(Number(array[0]) - Number(array[2]) == Number(array[4])) {
                a.push("O");
            } else {
                a.push("X");
            }
        } else if(array[1] == "+") {
            if(Number(array[0]) + Number(array[2]) == Number(array[4])) {
                a.push("O");
            } else {
                a.push("X");
            }
        } 
    })
    return a;
}