/* 범위 안의 키마다 표준몸무게를 구하자.
 표준몸무게는 (키-100) *0.9
 예시) '155cm'부터 '190cm'까지 '5cm'마다
       155cm 49.05kg
       160cm 54.00kg
       ...중략...
       190cm 81.00kg
 소수점 표시는 안 해도 됨
 */

 var lower = +prompt('몇 cm부터 : '); //키 시작점
 var upper = +prompt('몇 cm까지 : '); //키 끝점
 var step = +prompt('몇 cm마다 : '); //키 격차
 
 var height = lower; //키를 저장할 변수
 var weight;
 
 var message = '';
 while (height <= upper) {
     weight = (height - 100) * 0.9;
     message += `${height}cm ${weight}kg\n`;
     height += step;
 }
 alert(message);
