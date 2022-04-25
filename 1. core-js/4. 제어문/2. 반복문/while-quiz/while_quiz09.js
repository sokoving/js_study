/*
입력된 정수 이하 모든 홀수를 가로로 출력
alert는 한 번만 작동

실행 예.
정숫값 : 15
1 3 5 7 9 11 13 

*/

var targitNum = +prompt('정숫값: ');
var i = 1;
var message = '';

while (i <= targitNum) {
    if (i % 2 === 1) {
        message += `${i}\ `; 
        i++;
    } else {
    i++;
    }
}
alert(message)

/*풀이 
var num = +prompt('정수값: ');
var i = 1;
var message = '';
while (i <= num) {
    if (i % 2 === 1) {
        message += i + ' ';  << message 반복 추가 이렇게도 가능
    }
    i++;                     << if 조건문이 끝난 다음에 i에 1을 더하고 while로 돌아가기
}
alert(message);

*/
