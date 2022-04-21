/*  !!! JS 특 !!!
    ==, != 연산자는 암묵적으로 
    문자열 내부에 순수한 숫자가 있으면 
    자동으로 따옴표를 제거한 후 비교합니다.
    >> js에서는 쓰지 말기

    =  : 할당
    == : 동등
    === : 일치
*/

var a = 5;
var b = '5';

console.log(a == b);  //a랑 b랑 같니? > true
console.log(a != b);  //a랑 b랑 다르니? > false

console.log(a === b);  //a랑 b랑 완전히 일치하니? > false
console.log(a !== b);  //a랑 b랑 완전히 다르니? > false

console.log(`=============================`);
    // JS에서는 ==으로는 일률적인 결과를 얻기 힘듦
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');
console.log(`=============================`);
    // 그러니까 JS에서는 === 쓰기
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

console.log(`=============================`);

// 숫자 대소 비교
var z = 10;
console.log(z >= 10);   // T
console.log(z <= 10);   // T

console.log(`=============================`);

/* 문자열 동등 비교
        같은 글자더라도 글자수가 다르면 무조건 다름 */
console.log('a' === 'A');   // F
console.log('안녕하세요' === '안녕 하세요');  // F

/* 문자열 대소 비교
 모든 문자에는 숫자가 부여되어 있다.
 A: 65,  a: 97,  가: 44032  <외워두면 좋음 
 문자열 대소 비교는 문자열을 이 숫자로 치환해서 연산한다 */
console.log('a' > 'A');
console.log('가' < '바');
console.log('ace' > 'abc');
console.log('pineapple' < 'zebra');
console.log('pineapple' > 'Zebra');

/* 유니코드 체계
   1. 영어 대문자 < 영어 소문자 < 한글
   2. 같은 형태면 사전에서 뒤에 나오는 단어일수록 크다
*/

console.log(`=============================`);
console.log(true>false); // t
// true는 1로, false는 0으로 변환돼서 비교한다.