/*
반환문(return)

1. 함수 안에 있는 변수는 밖에서 사용을 할 수 없다.
 >> return을 사용해서 변수를 밖으로 빼내는 것.

* 반환값은 표현식으로 만들어야 한다(값이 추출되는 형태)

2. return은 함수의 탈출문
 >> return 이후 코드는 실행되지 않는다.

3. return이 없다 (void 함수)
 >> return이 없는데 변수에 저장하려고 하면 undefined로 반환됨.
 >> return값이 없는 함수는 변수에 저장하면 안 됨.
 >> return값이 없는 함수는 다른 함수의 인수로 사용할 수 없음  >> 단독호출하기

*/


// ============================함수 정의부===========================//

function seletRandomPet(){
    var pets = ['멍멍이', '야옹이', '짹짹이', '어흥이', '부엉이']
    var rn = Math.floor(Math.random()*pets.length);
    return pets[rn];
}

console.log(`==== 1.  함수 안에 있는 변수는 밖에서 사용을 할 수 없다 ====`);
// console.log(pets);  >> 에러



console.log(`============= 2. return은 함수의 탈출문 ============`);
// return이 있는 함수
function add(n1, n2) {
    console.log(`${n1} X ${n2} = ${n1*n2}`);
    return n1 + n2;
    var a = 10;             // return 이후 코드는 실행되지 않는다.
    console.log(`dddd`);
}
console.log(`=========== return이 없는 함수(void) =============`);
function multi(n1, n2) {
    console.log(`${n1} X ${n2} = ${n1*n2}`);
}


console.log(`=========== 탈출문 return =============`);
function callName(nickName) {
    //금지어 리스트
    var prohibits = ['바보', '멍청이', '도라이'];
    if (prohibits.includes(nickName)){      //nickName이 prohibits 배열 안에 있다면
        console.log('나쁜 말 닉네임은 안 돼요!'); // 이 말을 하고
        return;                             // 함수 종료(return을 탈출문으로 사용)
    }
    console.log(`${nickName}님 안녕하세요!`);
}

console.log(`=========== break와 return ==============`);
//break : while을 탈출 > 그 이후 코드 실행
//return : 함수를 종료 > 그 이후 코드 미실행

function foo() {
    var n = 1;
    while (n < 5) {
        if (n === 3) {
            break;
        }
        console.log(`${n}!!!`);
        n++;
    } // end while    console.log(`반복문 끝!`);
}//end function foo

// 함수 호출부 ================================================================//

console.log(`============= 3. return 유무 ============`);
//return값이 없는 함수는 변수에 저장하면 안 됨.
var r1 = add(1, 2);             // return이 있는 함수 : r1에 n1+n2을 반환된다
var r2 = multi(10, 20);         //return이 없는 함수  : r2에 반환될 수 있는 값이 없다 
console.log(`r1: ${r1}, r2: ${r2}`); //r1: 3, r2: undefined


console.log(`============= 4. 함수의 중첩 호출 ============`);
var r3 = multi(add(2, 4), add(5, 1)); 
console.log(`r3 : ${r3}`);    //r3 : 

//return값이 없는 함수는 다른 함수의 인수로 사용할 수 없음  >> 단독호출하기
var r4 = multi(multi(3, 2), add(4, add(6, 3)));  // undefined X 13 = NaN
console.log(`r4 : ${r4}`);  //r4 : undefined


callName('도우너');     //retrun값이 없는 함수는 단독호출한다
callName('바보');       // 

console.log(`=========================`);

foo();

console.log(`============ 함수의 리턴값은 언제나 하나! =============`);
// 근데 배열이나 객체도 값 하나 (다차원 배열 포함).
// 2개의 정수를 전달받아서 +-*/ 4가지 값을 리턴받고 싶다.
function operataAll(n1, n2){
    // var arr = [n1+n2, n1-n2, n1*n2, n1/n2];   >> 배열 
    return {
        plus: add(n1, n2),   //함수 내에 다른 함수 사용 가능
        minus: n1-n2,
        multiple: multi(n1*n2), // return 값이 없는 함수는 안 됨
        divide: n1/n2
    }
    // return arr;
}
var resultList = operataAll(4, 2);
console.log(resultList);
// console.log(resultList[1]);      // 배열 참조 호출
console.log(resultList.plus);       // 객체 참조 호출