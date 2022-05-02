// 실수를 했을 때 에러가 안 난다고 좋은 게 아니다.


// 1. 변수의 중복선언 허용

var let = 10;
var let = 100;  // 중복선언 허용하면 안 되는데 되게 함.
console.log(let); //100;


// 2. 블록레벨 스코프 지원 X  >> 전역변수 남발하게 됨.
var y = '안녕';
if (true) {
    var y = '잘 가';  // 지역변수X 전역변수O
}
console.log(y); // 잘 가.

for (var i = 0; i < 3; i++){}
console.log(i);  // for문이 끝나면 i는 더 쓸 일이 없는데 전역으로 살아 있다.


// 3. 변수 호이스팅  >> 변수 선언을 찾지 못하거나 힘듦
f = 100;
console.log(f); // 선언도 안 됐는데 참조가 됨.

var f;  // 코드의 흐름을 읽기 어렵다.