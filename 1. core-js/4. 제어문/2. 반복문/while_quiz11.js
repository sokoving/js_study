/*
입력된 정수까지의 별을 5개마다 줄바꿈하여 출력
실행 예.
몇 개의 *를 출력할까요? 12(prompt)
*****
*****
**
*/

var targitNum = +prompt('몇 개의 별을 출력할까요?');
var star = 1;
var message = '';
while (star <= targitNum) {
    if (star % 5 !== 0){
        message += '*';
    } else {
    message += '*\n';
    }
    star++;
}

alert(message);


/* 풀이
// var n = +prompt('몇 개의 *를 출력할까요?');

var n = 12;
var i = 1;
var result = '';
while (i <= n) {
    result += '*';
    if (i % 5 === 0) {      << if 사용 이렇게도 가능
        result += '\n';
    }
    i++;
}
// alert(result);
console.log(result);
*/