
/* 조건 연산자 - 삼항 연산자(연산자가 2개)
 {논리형 조건식} ? 참일경우실행할코드 : 거짓일경우실행할코드;
*/

var myFriend = '짹짹이';
// myFriend = '쿵쿵이';
myFriend === '짹짹이'           //1항 : 논리형 조건식
 ? console.log('짹짹아 안녕~')  //2항 : 참일 경우 실행
 :console.log('누구세요??');    //3항 : 거짓일 경우 실행

//  시험 점수
 var score = 78;
//  var score = 18;
 var result = score >= 60 ? '합격' : '불합격';  
 console.log(`시험결과: ${result}`);

/*
var result = score >= 60;
 비교 연산(>=) 후에 대입 연산(=)한다.
 score >= 60 을 변수 선언한 result에 대입한다. 
*/