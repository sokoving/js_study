/*
 콘솔창에 배열의 요소들을 순회하여
 ---
 월요일
 화요일
  ...
  일요일
 ---
 를 출력하세요( for ~ of문, for문 둘 다 만들기)
*/

var dayOfweeks = ['월', '화', '수', '목', '금', '토', '일'];

// for         i = 0~6
for ( var i = 0; i < dayOfweeks.length; i++){
    console.log(`${dayOfweeks[i]}요일`);
}
console.log(`==============`);
/// for ~ of   n = 월~일
for ( var n of dayOfweeks) {
    console.log(`${n}요일`);
}
