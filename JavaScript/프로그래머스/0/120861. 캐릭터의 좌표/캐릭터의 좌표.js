function solution(keyinput, board) {
    // 원점 설정
    let setpoint = [0,0];
    //초대 x,y 거리 설정
    let maxX = Math.floor(board[0] / 2);
    let maxY = Math.floor(board[1] / 2);
    keyinput.forEach(k => {
        // keyinput이 left이며 setpoint[0]이 -maxX보다 클때
        if(k==="left"&& setpoint[0] > -maxX) {
            // 원점 x에 1 뺴주기
            setpoint[0] = setpoint[0] - 1;
            // keyinput이 right이며 setpoint[0]이 maxX보다 작을때
        } else if(k==="right" && setpoint[0] < maxX) {
            // 원점 x에 1 더하기
            setpoint[0] = setpoint[0] + 1;
            // keyinput이 up이며 setpoint[1]이 maxY보다 작을때
        } else if(k==="up" && setpoint[1] < maxY) {
            // 원점 y에서 1 더하기
            setpoint[1] = setpoint[1] + 1;
            // keyinput이 down이며 setpoint[1]이 -maxY보다 클때
        } else if(k==="down" && setpoint[1] > -maxY) {
            // 원점 y에서 1 빼기
            setpoint[1] = setpoint[1] - 1;
        }
    })
    // 원점 위치 반환
    return setpoint;
}