/* 스코프(scope)
함수 밖에서 선언된 변수는 전역변수(global variation)
    함수 밖이든 안이든 전부 사용 가능
    프로그램이 종료될 때까지 메모리에 저장돼 있다

함수 안에서 선언된 변수는 지역변수(local variation)
    함수 안에서만 사용 가능
    함수 호출이 끝나면 메모리에서 자동 삭제

# 전역변수와 지역변수가 저장되는 위치가 다른다.
 > 함수 안에서 함수 밖의 변수와 같은 이름으로 선언했어도
  재할당이 되지 않는다.
 > 함수가 끝나면 자동 삭제
 > 

# 함수 안에서는 지역변수가 우선 순위로 참조된다.

 */

var x = 10;     // 전역 변수 : 함수 밖에서 선언

function foo() {
    var y = 3;  // 지역 변수 : 함수 안에서 선언
    var i = x+y;
}

console.log(`x: ${x}`);
// console.log(`y: ${y}`);


var z = 'global z'; //전역변수

function bar() {
    var z = 'local z'; //지역변수
    console.log(`함수 내부: ${z}`);
}

console.log(`함수 외부(호출 전): ${z}`); // global z
bar();                         // local z
console.log(`함수 외부(호출 후): ${z}`); // global z




for ( var i = 0; i < 5; i++){
    console.log(`for 안 : ${i}`);
}

console.log(`for 밖 : ${i}`);
