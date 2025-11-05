function solution(quiz) {
    // return할 array 선언
    let a = [];
    // quiz를 forEach를 활용해 돌림
    quiz.forEach(q => {
        // 공백을 제거하여 array로 바꿈
        let array = q.split(" ");
        // 연산자 위치의 index의 값이 -일때
        if(array[1] == "-") {
            // 만약 x - y == z일때
            if(Number(array[0]) - Number(array[2]) == Number(array[4])) {
                // 선언한 array에 O push
                a.push("O");
            } else {
                // 아닐땐 x push
                a.push("X");
            }
            // 연산자 index값이 + 일때
        } else if(array[1] == "+") {
            // x + y == z라면 
            if(Number(array[0]) + Number(array[2]) == Number(array[4])) {
                // O push
                a.push("O");
            } else {
                // X push
                a.push("X");
            }
        } 
    })
    // array return
    return a;
}