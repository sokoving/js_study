
//명시적 문자열 변환
var a = 10, b = 20;

var result11 = a + b;
console.log(result11);

// 1. 빈문자열에 더하기 (암묵적 항변환 이용)
var result12 = '' + a + b;
console.log(result12);

// 2. String 생성자 함수 사용
var result13 = String(a) + String(b);
console.log(result13);

// 3. toString 메서드 사용
var result14 = a.toString() + b.toString();
console.log(result14);

console.log(`================`);

// 명시적 숫자 변환
var m = '10', n = '5.5';

// 1. + 부호 연산자 붙이기
var result21 = +m + +n;
console.log(result21);

// 2. Numver 생성자 함수 사용
var result22 = Number(m) + Number(n);
console.log(result22);

// 3. parseInt(m) 정수 변환 함수, parseFloat(n) 실수 변환 함수 사용
var result23 = parseInt(m) + parseFloat(n);
console.log(result23);


console.log(`================`);
// 명시적 논리 변환

//1. Boolean 생성자 함수 사용
var logic = undefined; //falsy
var result31 = Boolean(logic); // false
console.log(result31);

//2. !! : ! 부정 논리 연산자 두 번 사용
var logic = null; //falsy
var result32 = !logic; //true
var result33 = !!logic; //false

console.log(result32);
console.log(result33);
