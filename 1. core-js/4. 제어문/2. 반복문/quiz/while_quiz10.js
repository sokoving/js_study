/*
실행 예.
n의 값 : 3 (prompt))
1의 제곱은 1
2의 제곱은 4
3의 제곱은 9
*/

var targitNum = +prompt('n의 값 : ');
var n = 1;
var message = '';

while (n <= targitNum){
    message += `${n}의 제곱은 ${n**2}\n`;
    n++;
}
alert(message);
