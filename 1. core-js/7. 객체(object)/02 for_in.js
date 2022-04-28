/*
# for ~ in : 객체의 key를 전체 순회한다
           변수에 key값이 할당돼 프로퍼티의 값을 참조할 수 있다.
           이때 변수는 문자타입이기 때문에 대괄호 참조 사용

for (var prop in object){
    console.log(object[prop]);   >> prop = 'key1';
}

# for ~ of : 배열의 요소를 전체 순회
           변수에 인덱스 번호가 할당됨.

# 객체 내부의 특정 키의 존재 여부 확인
  >> for문이 포함돼 있기 때문에 굳이 안 써도 됨
var haskey = color in phone;

*/


var phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 S21',
    price: 1200000
};

console.log(`=====문자 타입의 key 참조는 . 말고  []=====`); 

for ( var prop in phone) {          // prop에는 key가 순서대로 대입됨
    console.log(phone[prop]);       // prop은 string 타입의 변수 > phone.prop 하면 안 나옴.
}


console.log(`=====객체 내부의 특정 키의 존재 여부 확인=====`); 
var haskey = color in phone;   // phone에 변수 color가 있는지 확인
console.log(haskey);           // false

haskey = 'color' in phone;     // phone에 키 color가 있는지 확인
console.log(haskey);           // true

var color = 'color';           // 변수 color 선언
haskey = color in phone;       // 
console.log(haskey);           // true
