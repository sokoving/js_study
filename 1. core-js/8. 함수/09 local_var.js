// 매개변수 x: 지역 스코프
function outer(x) {
    var y = 'outer local y';
    var z  = 'outer local z';
    console.log(`x: ${x}`); //매개변수 x 참조
    
    function inner() {
        var x = 'inner local x';
        var z = 'inner local y';
        console.log(x); 
        console.log(z); //
        console.log(y);
    }
    inner();
}

var x = 'global x';

outer('outer param x');

console.log(`======================`);
/* 전역 변수의 문제점

>> 1. 전역변수 선언은 최소화
   2. 함수 정의부를 모아놔 명시성을 올리고
   3. 즉시 실행 함수를 써서 변수 중복을 피하고 리소스 절약.
*/

//사이트 전체 정책 할인율
var saleRate = 0.1; //전역변수

//코드 400줄 ~~~

//임시 이벤트로 할인율을 1시간 동안만 20%로 상승
var saleRate = 0.2; //임시 할인율 변수

// 코드 400줄 ~~~

console.log(saleRate);  //전체 정책 할인율이 나도 모르게 재할당