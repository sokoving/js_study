
var age = 22;

if (age > 20) {
    console.log('성인입니다.');
} else if (age > 17) {
    console.log('고딩입니다.');
} else if (age > 14) {
    console.log('중딩입니다.');
} else if (age > 8) {
    console.log('초딩입니다.');
} else {
    console.log('아동입니다.');
}

/* 주의 1
    else if는 if부터 순서대로 참, 거짓을 검사한다.
참이면 실행 후 검사 종료, 거짓이면 다음 조건으로 넘어가 검사.
모든 조건이 거짓이면 else를 실행
*/

/* 주의 2
    if와 else if의 차이.
else if가 아닌 if를 쓴다면
if 조건이 참이더라도 검사를 종료하지 않고
다음 if를 검사해 참, 거짓을 판단을 계속한다.
*/ 

/* 주의 3
    위의 조건이 아래 조건의 범위를 포함하지 않게 한다.
만약 if (age > 12) 다음에
esle if (age > 15)와 esle if ( age > 8)가 오게 되면 
(age > 15)의 조건은 검사하지 않는다.
 */