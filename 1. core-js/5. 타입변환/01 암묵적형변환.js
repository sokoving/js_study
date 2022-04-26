/*
# 문자타입과 다른 타입의 + 연산은 문자타입으로 암묵적 형변환
   > ''(빈문자열)과 다른 타입을 + 연산시키면 문자타입으로 암묵적 형변환
 
#  다른 산술 연산에 문자타입이 있어도 순수한 숫자만 있으면 숫자로 암묵적 형변환

 + > 이항 연산이면 산술연산자
   > 단항 연산이면 부호연산자 (암묵적 숫자 변환)
     +true  : 1(대표값은 1이고 0을 제외한 모든 숫자가 true)
     +false : 0
     +null  : 0
     +hello : NaN

# Falsy : undefined, null, 0, NaN, ''
 Truthy : Falsy를 제외한 모든 값

*/

var ex1 = 10 + '20';    // 숫자 + 문자 > 문자
console.log(typeof ex1); //string
console.log(ex1); //1020

var ex2 = '' + 10;  //빈 문자 + 숫자 > 문자
console.log(typeof ex2); //string
console.log(ex2); //10

var ex3 = false + '';
console.log(typeof ex3); //string
console.log(ex3); //false

var ex4 = 'hello' + 10 + 20;
console.log(typeof ex4); //string
console.log(ex4); //hello1020

var ex5 = 10 + 20 + (30 + 'hello');
console.log(typeof ex5); //string
console.log(ex5); //3030hello

//순수하게 숫자만 있으면 숫자 타입으로 암묵적 변환
var ex6 = 30 - '20';
console.log(typeof ex6); //number
console.log(ex6); //10

var ex7 = 30 - '20!';    //!가 들어가면 형 변환 안 됨
console.log(typeof ex7); //number
console.log(ex7); //NaN

var ex8 = 50 * '20';
console.log(typeof ex8); //number
console.log(ex8); //1000

var ex8 = '50' * '20';
console.log(typeof ex8); //number
console.log(ex8); //1000

console.log('');
console.log(+'100');
console.log(+true);
console.log(+false);
console.log(+null);

if('') console.log('OK');
if(true) console.log('OK');
if(0) console.log('OK');
if('hello') console.log('OK');
if(null) console.log('OK');