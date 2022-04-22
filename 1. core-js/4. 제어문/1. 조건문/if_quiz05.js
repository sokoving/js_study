alert('3개의 정수를 입력하세요.')

var num1 = +prompt('정수 A')
var num2 = +prompt('정수 B')
var num3 = +prompt('정수 C')

if (num1 === num2){
    if (num2 === num3){
        alert('3개의 값이 모두 같습니다.');
    } else {
        alert('2개의 값이 같습니다.');
    }
} else if(num1 === num3){
    alert('2개의 값이 같습니다.');
} else if(num2 === num3){
    alert('2개의 값이 같습니다.');
} else {
    alert('모두 다른 값입니다.');
}
/*
1 2 3
5 5 5  num1 === num2 $$ num2 === num3  3개!
5 5 4  num1 === num2 $$ num2 !== num3  2개!
5 4 5  num1 !== num2 $$ num1 === num3  2개!
4 5 5  num1 !== num2 $$ num2 === num3  2개
3 4 5  num1 !== num2 $$ num2 !== num3  >> ...
*/

/*
  a === b === c 가 안 되는 이유
  a === b를 먼저 연산 > true
  그다음에 true === c 를 연산하기 때문
  결과가 나오더라도 js의 암묵적 룰에 의해 나온 것이기 때문에 비추
*/

console.log(`=============================================`);
/*
var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

if (a === b && b === c) {
    alert('3개 값이 모두 같습니다.');
} else if (a === b || b === c || c == a) {
    alert('2개 값이 같습니다.');
} else {
    alert('모두 다른 값입니다.');
}
*/