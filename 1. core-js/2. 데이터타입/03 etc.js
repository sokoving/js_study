// 논리 타입(boolean)
var logic = 10 < 5;
console.log(logic);
console.log(typeof logic);

// 논리값을 저장할 경우
var x = true;   //True는 안 됨(파이썬은 됨)
var y = false;

var m = 'true'; //str

/* undefined 타입 > 값: undefined
 변수를 선언만 하고 초기화하지 않은 경우 */
var fruit;
console.log(fruit);

var juice = ''; //undefined  아님, 빈 문자열
console.log(typeof juice);

/* null 타입 > 값: null
 개발자가 의도를 가지고 값이 아예 없음을 표현 */
var apple = '사과';
apple = null;

var money = 50000;
money = 0; //빈 문자열

// 주의: undefined과 null, '', 0은 다 다름