/* 정리
배열(array) : index 번호로 관리, 요소간에 연관이 있을 때
객체(object) : index 대신 key로 관리, 요소간에 연관이 없다

1. 객체 리터럴
대괄호 >> {}
객체 생성 >> {};
빈 객체 만들기 : var obj = {};

[예시]
var obj = {
    key1: 'string value',
    key2: num vaue,
    key3: [1, 2]
};

# property : key와 value로 구성
            , 로 구분
            key로 value를 호출할 수 있기 때문에 나열 순서는 상관없다.

 key : 문자지만 ''는 붙이지 않는다.
       숫자는 되도록 쓰지 않는다.
       띄어쓰기가 있으면 '' 붙이기. (권장되지 않음)

 value : 모든 타입을 쓸 수 있다.
        '문자', / 숫자 - 8,  / 논리 - true, false, / 배열 - ['문자1', '문자2', '문자3']

2. 객체의 타입
 obj >> 객체 타입(object)
 key1, 2, 3 >> undefined

3. 객체에 저장된 값 참조
obj.key1;  >>  뽀삐
obj.key3[0];  >> 1  배열 값을 가진 키는 배열처럼 사용 가능 

4. 대괄호[] 참조
var key = 'key1';
obj.[key1];  >> 대괄호[]를 사용하면 문자 타입 참조 가능
                for ~ in 문 때는 문자 타입으로 반환되기 때문에 이렇게 참조한다

5. 프로퍼티 값 수정
obj.key1 = '수정값';
obj.key3[0] = '배열수정';

6. 새로운 프로퍼티 동적 추가 (코드 실행 중 추가)
obj.key4 = 'newProp';

  있는지 찾아보고(있으면 기존값 수정되니까) 추가
if (!('key4' in obj)) {
    obj.key4 = 'newProp';
}

7. 프로퍼티 동적 제거(코드 실행 중 추가)
delete obj.key4;
*/

console.log(`===== 1. '객체 리터럴'을 이용한 객체 생성=====`);
var dog = {                     //[]; > 배열,  {}; > 객체
    name: '뽀삐',       // 이 한 줄이 프로퍼티(property)
    kind: '진돗개',
    age: 3,
    injection: true,
    favorite: ['산책', '개껌']
};  

var cat = {
    name: '점순이',
    kind: '블랙러시안',
    age: 2,
    injection: false,
    favorite: ['낮잠', '츄르', '캣타워']
};

console.log(`===== 2. 객체의 타입=====`);
console.log(typeof dog);  //object

console.log(`===== 3. 객체에 저장된 값 참조====`); 
// object.key  >> key로 관리하면 몇 번째 프로퍼티든지 상관이 없다
console.log(dog.name);  //뽀삐
console.log(cat.name);  //점순이

console.log(dog.favorite);
console.log(dog.favorite[0]);  //favorite은 배열 타입

dog.favorite.push('꼬리흔들기'); //그래서 push 쓸 수 있음
console.log(dog.favorite);

// cat.splice(1, 1);        > cat은 객체 타입, splice는 배열에 사용하는 메서드 > !에러!
cat.favorite.splice(0, 1); // favorite은 배열 타입이라 가능


console.log(`===== 4. 대괄호[] 참조=====`); 

console.log(dog.injection);
console.log(dog['injection']);  //대괄호 참조할 때는 문자 타입이면 ['key'] 이렇게

var x = 'age';          //하지만 'key'를 변수로 별도 저장했다면
console.log(dog[x]);    //대괄호 참조할 때는 '' 안 써도 됨(이미 변수값이 ''돼 있으니까) 
// console.log(dog.x);  >안 됨

console.log(`===== 5. 프로퍼티 값 수정=====`); 
dog.age = 5;
dog.favorite[1] = '아이들';
console.log(dog);

console.log(`===== 6. 새로운 프로퍼티 동적 추가(코드 실행 중 추가)=====`); 
cat.master = '김철수';  //새로운 프로퍼티 master= '김철수 추가
console.log(cat);

console.log(`===== 7. 프로퍼티 동적 제거(코드 실행 중 추가)=====`); 
delete cat.master;    //프로퍼티 master='김철수' 제거
console.log(cat);