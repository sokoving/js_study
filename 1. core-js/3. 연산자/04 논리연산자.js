/* && : AND 연산
 양쪽 항 모두 참이면 전체 연산결과가 참이다.
  로그인의 경우를 보면 이해가 쉽다*/
var t = true, f = false;
//        아이디 비번
console.log(t && t);  // t
console.log(t && f);  // f
console.log(f && t);  // f
console.log(f && f);  // f

console.log(`=============================`);

/* || : OR 연산
 양쪽 항 중 하나만 참이어도 전체 연산결과가 참이다.*/

 console.log(t || t);  // t
 console.log(t || f);  // t
 console.log(f || t);  // t
 console.log(f || f);  // f
 
console.log(`=============================`);

/*! :  NOT 연산(논리 반전) - 단항 연산자
    부정문을 만들 때 쓴다   */ 
console.log(!t); // not true, false
console.log(!f); // not false, true

var money = 0;
if (!money) {       //만약에 money가 없으면 
    console.log(`돈이 없어요~`);  //돈이 없어요~라고 출력해
} else {
    console.log(`돈이 ${money}원 있어요. `);
}