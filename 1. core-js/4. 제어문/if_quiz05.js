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
    // alert('모두 다른 값입니다.')
}
/*
1 2 3
5 5 5  num1 === num2 $$ num2 === num3  3개!
5 5 4  num1 === num2 $$ num2 !== num3  2개!
5 4 5  num1 !== num2 $$ num1 === num3  2개!
4 5 5  num1 !== num2 $$ num2 === num3  2개
3 4 5  num1 !== num2 $$ num2 !== num3  >> ...
*/
