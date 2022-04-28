// 변수 이름 막 짓지 마라! //

/* identifier(식별자)
데이터를 구분하기 위한 고유한 이름
변수, 함수, class 등에 쓰임*/

// 1. 식별자 이름은 대소문자를 구변한다.
var apple = '사과';
apple = '맛있는 사과';
var APPLE = '맛 더럽게 없는 사과';
var Apple = '에이뽈';

console.log(apple);
console.log(APPLE);
console.log(Apple);

/* 2. 숫자로 시작하거나 숫자만으로 구성하면 안 됨!
 var 999 = '구백구십구'     > 에러!
 var 7lucky7 = '럭키럭키'  > 에러! */
var lucky7 = '럭키';
var a99le = '사과임';

/*3. 특수문자는 &와 _ 외 사용 불가능
 var hello! = '헬로!';
 var hello^^ = '안녕'; */
var $bye$$ = '괜찮아';
var _my_family = '내 가족';

// 4. 띄어쓰기 불가능
// var out vip members address = '띄어쓰기 안 됨';
var our_vip_mambers_address = 'snake case(비추: js 개발자들이 싫어함)';
var ourVipMambersAddress = 'camel case(추천)';

// 5. 키워드는(예약어)는 사용하지 말 것!
    // keyword : 미리 정해져있는 기능적 단어
    // var var ='안 됨';
    // var if ='쓰지 마용';
var Try = '되긴 하는데 굳이?';

// 6. 이름은 구체적이고 정확하고 일관성 있게 지을 것!
var a = '홍길동';   //var memberName
var b = '서울시';   //var memberAddress
var f = '30';      //var memberAge
var k = '19901117'; //var userBirthday = 'user 말고 member로 통일성 주기';