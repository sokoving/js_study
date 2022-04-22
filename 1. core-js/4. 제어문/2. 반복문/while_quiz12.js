/*
입력된 정수의 모든 약수를 출력하고
약수의 총 개수도 출력

실행 예.
정숫값 : 12 (promtp)
1
2
3
4
6
12
약수는 6개입니다.
*/

var targitNum = +prompt('정숫값 : ');
var i = 1;
var count = 0;

while (i<=targitNum){
    if (12 % i === 0) {
        count++;
    }
    i++;
}

alert(`약수는 ${count}개입니다.`);


/* 풀이
var n = +prompt('정수값: ');
var i = 1;
var count = 0; //약수의 개수 저장
var message = '';
while (i <= n) {
    if (n % i === 0) {
        message += i + '\n';
        count++;
    }
    i++;
}
message += `약수의 개수는 ${count}개입니다.`;
alert(message);
*/