/* 정리
1. 반복되는 내용을 따로따로 쓰면 일괄적으로 관리하기 힘듦

2. 함수(function)
  반복되는 코드를 정교화시켜서 하나의 묶음으로 만들 수 있다.
  함수를 사용하면 반복되는 코드를 적지 않고 처음 쓴 걸 재사용할 수 있다.

3. 함수 '정의' (함수를 만든다)
 함수의 이름은 동사 느낌으로 (변수는 명사 느낌, 배열은 명사 복수형)

4. '반환'(return)
 함수의 결과 나온 값을 내가 원하는 변수에 저장할 수 있다.
 함수의 탈출문 역할

5. 함수 '호출' (함수를 사용한다)
  함수 이름과 매개변수만으로 코드 재사용 가능

# 함수 정의부와 실행부를 나눠놓는 게 좋음

*/


console.log(`===== 반복되는 내용을 일괄적으로 관리하기 힘듦======`);
/*
var userName = '김철수';
console.log(`${userName} 님 안녕하세요~ 방가방가!`);
console.log(`${userName} 님 오늘도 즐거운 하루 되세요!`);

//~~~~~~~~~~~~1천 줄 코드~~~~~~~~~~~~

userName = '박영희';
console.log(`${userName} 님 안녕하세요~ 방가방가!`);
console.log(`${userName} 님 오늘도 즐거운 하루 되세요!`);


//~~~~~~~~~~~~2천 줄 코드~~~~~~~~~~~~

userName = '홍길동';
console.log(`${userName} 님 안녕하세요~ 방가방가!`);
console.log(`${userName} 님 오늘도 즐거운 하루 되세요!`);
*/

console.log(`함수: 반복되는 코드를 정교화시켜서 하나의 묶음으로 만들기`);

console.log(`===== 함수 정의 (함수를 만든다) ======`);  //함수 이름은 동사 느낌 
function callUserName(userName) {
    if (typeof userName === 'number') {     //함수 이름에 조건을 건다
        console.log(`숫자로 된 이름은 안 됩니다~`);
        return; //함수의 탈출문
    }
    console.log(`${userName} 님 안녕하세요~ 방가방가!`);
    console.log(`${userName} 님 오늘도 즐거운 하루 되세요!`);
    console.log(`=====================================`);
}

console.log(`===== 함수의 호출 (함수를 사용한다)======`);
//함수를 변수 이름만으로 지속적으로 재사용 가능
callUserName('박찬호');
callUserName('김영희');
callUserName(123);