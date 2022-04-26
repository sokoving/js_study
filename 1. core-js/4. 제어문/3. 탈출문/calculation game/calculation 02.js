/*
1. 1~20 사이의 랜덤으로 더하기 문제를 제시한다
2. 정답 > 정답입니다!
    오답 > 틀렸어요~
3. 0을 누르면 게임 종료 
== 01

4. 게임을 종료할 때 정답과 오답 횟수 알림
*/

alert(`즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~`);

//게임 시작

// count
var i = 1;  // 문제 순서
var correct = 0; //정답 수
var wrong = 0; //오답 수

while(true){
    // 1~20 랜덤 정수 2개 만들기
    var num1 = Math.floor(Math.random() * 20) + 1;
    var num2 = Math.floor(Math.random() * 20) + 1;

    var plusCorrect= num1 + num2;  // 더하기 정답
    console.log(`${num1} + ${num2} = ${plusCorrect}, 정-${correct} 오-${wrong}`);

    // 더하기 문제
    var plusAnswer = +prompt(`Q${i}. ${num1} + ${num2} = ??`);

    if ( plusAnswer === 0 ) {
        alert(`게임을 종료합니다!`);
        alert(`정답횟수: ${correct}회, 틀린횟수 ${wrong}회`);
        break;
    } else if ( plusAnswer === plusCorrect) {
        alert(`정답입니다!`);
        correct++;
    } else {
        alert(`틀렸어요~`);
        wrong++;
    } 

    i++;
}