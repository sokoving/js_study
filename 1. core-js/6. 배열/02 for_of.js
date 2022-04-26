/*
인덱스의 범위 : 0 ~ length - 1

i의 범위가 길이와 일치하지 않으면 정확한 값을 얻을 수 없다
 >> length 사용

for : '인덱스'를 사용해 배열의 특정 요소 사용 가능
 >>변수에 '요소'를 차례대로 대입

for of : 배열의 요소 전체 순회
        인덱스는 얻을 수 없으나 계산 속도가 빠름
 >>변수에 배열의 요소 '순서'를 대입
*/


var scoreList = [97, 88, 100, 92, 55, 23];
var total = 0;

/* for 반복문을 이용한 총점 구하기
for (var i = 0; i < scoreList.length; i++) {
    if (i % 2 === 0) {
        total += scoreList[i];
    }
}
*/

/* for 반복문을 이용한 짝수번째 총점 구하기
for(var i = 0; i < scoreList.length; i++){
    if ( i % 2 === 0) {
    total += scoreList[i];
    }
}
console.log(`총점 : ${total}`);
*/


/* for ~ of 배열 전용 반복문을 이용한 총점 구하기(전체 순회)
 1회차 loop > n = 배열[0]
 2회차 loop > n = 배열[1]
        ...
 6회차 loop > n = 배열[5]
 break;
      변수 of 배열 */
for (var n of scoreList){
    total += n;
}
console.log(`총점 : ${total}`);






//평균 구하기
var average = total / scoreList.length;
console.log(`평균 : ${average}`);

//소수점 두 자릿수에서 반올림하기
/* Math.round는 정수만 나타낼 수 있음
평균에 100(10의 2제곱)을 곱함 > 올림하기 > 다시 100(10의 2제곱)으로 나누기 */
var digit = 2;
var prettierAvg = Math.round(average * 10 ** digit) / 10 ** digit;
console.log(`평균 반올림 : ${prettierAvg}`);

