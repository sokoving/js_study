alert('3개의 정수를 입력하세요.')

var num1 = +prompt('정수 1');
var num2 = +prompt('정수 2');
var num3 = +prompt('정수 3');



1 2 3

4 5 5 num1 <= num2 $$ num1 <= num3 > num1
5 4 5 num1 >= num2 $$ num2 <= num3 > num2
5 5 4 num1 >= num2 $$ num2 >= num3 > num3

4 5 6 num1 < num2  num1 < num3  num2 < num3
4 6 5 num1 < num2  num1 < num3  num2 > num3
5 4 6 num1 > num2  num2 < num3
6 4 5 num1 > num2  num
5 6 4 num1 > num2
6 5 4 num1 > num2