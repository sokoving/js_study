// 문자열과 다른 타입의 덧셈 > 결합연산
var a = '10';
console.log(a + 20); // 1020

// 나눗셈 연산과 나머지
console.log(27 / 5); 
    /* 정수의 나눗셈은 소숫점 이하의 값을 가질 수 없지만  > 5
        js는 정수 개념이 없이 때문에 실수 나눗셈이 됨    > 5.4 */
console.log(27 % 5); // 2
console.log(4 % 10); // 4
console.log(0 % 100); // 0
    /*나눗셈의 나머지 값을 구하는 연산자 %
        나눗셈 뒤에 숫자가 앞보다 크면 앞이 나머지다 */
console.log(100 % 0); //NaN(산술 불가)
console.log(10 / 0); //Infinity(산술 불가)
    /*0으로는 나눗셈 불가*/

var num1 = 8, num2 = 5;
console.log(num1 % num2); //3

// 거듭제곱연산자(**) -ES6+
console.log(num2 ** 2); //25

console.log(`=============================================`);
// 증강연산자 (++: 1증가, --: 1감소) >단항연산자
var x = 3;
x++;
++x;
x--;

console.log(`x: ${x}`);

// 전위 연산(prefix) : 산술연산자 중 최우선
// 후위 연산(postfix) : 산술연산자 중 최후선(=보다도 뒤에 연산)
var a = 10;
var b = ++a;

console.log(`a: ${a}, b: ${b}`);

var c = 5;
var d = ++c * 2;
console.log(`c: ${c}, d: ${d}`);

var e = --b + c++ * d;
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, e: ${e}`);