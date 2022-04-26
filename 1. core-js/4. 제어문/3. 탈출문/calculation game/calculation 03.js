/*
== 01   1. 1~20 사이의 랜덤으로 더하기 문제를 제시한다
        2. 정답 > 정답입니다!
            오답 > 틀렸어요~
        3. 0을 누르면 게임 종료 

== 02   4. 게임을 종료할 때 정답과 오답 횟수 알림

== 03   5. 빼기, 곱셈 추가
    문제 내기 문구
    문제식
    문제답
*/

alert(`즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~`);

//게임 시작

// var
var i = 1;  // 문제 순서
var correct = 0; //정답 수
var wrong = 0; //오답 수

var calculater  // 연산 부호
var question // 문제식의 답

while(true){
    // 1~20 랜덤 정수 2개 만들기
    var num1 = Math.floor(Math.random() * 20) + 1;
    var num2 = Math.floor(Math.random() * 20) + 1;
    var numX = num1;  //빼기 숫자 바꾸기 용

    // 랜덤 수에 따른 문제, 연산부호 구하기
    var randomcal = Math.floor(Math.random()*100);

    if (randomcal > 80) {       //곱셈
        question = num1 * num2;
        calculater = 'X';
    } else if(randomcal > 40) { //뺄셈
        if (num1 < num2) {
            num1 = num2;
            num2 = numX;
        } else if ( num1 === num2) {
            continue;
        }
        question = num1 - num2;
        calculater = '-';
    } else {                   //덧셈
        question = num1 + num2;
        calculater = '+';
    }
    
    // 문제
    var answer = +prompt(`Q${i}. ${num1} ${calculater} ${num2} = ??`);
    
    //secret
    console.log(`${num1} + ${num2} = ${question}, 정-${correct} 오-${wrong}`);
    
    //알림
    if ( answer === 0 ) {
        alert(`게임을 종료합니다!`);
        alert(`정답횟수: ${correct}회, 틀린횟수 ${wrong}회`);
        break;
    } else if ( answer === question) {
        alert(`정답입니다!`);
        correct++;
    } else {
        alert(`틀렸어요~`);
        wrong++;
    } 
    
    i++;
}