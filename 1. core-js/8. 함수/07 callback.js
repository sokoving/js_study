/*콜백 함수 : 일단 함수를 매개변수로 놓고
             호출할 때 함수를 값으로 표현해(함수 리터럴)
             반복 실행할 함수를 함수 호출할 때 정의함

            개발자가 필요한 함수를 사전에 모두 만들 수 없기 때문.

            기본 틀은 함수로 만들고 바꿀 조건은 콜백함수로 만들어 호출할 때마다 넣기
*/

/* 필요한 개념
 # 기본 함수 정의
function multiply(n1, n2){ 
    return n1 * n2;
};
 # 함수 리터럴 (함수를 값으로 표현한다.)
var multiply = function (n1, n2){
    return n1 * n2;
};

 # 화살표 함수 (약식 표현)
 var multiply = (n1, n2) => n1 * n2;
  함수의 내용물이 return문 딱 하나일 경우 functon, return, {} 생략 가능
  매개변수가 하나일 경우 ()도 생략 가능
*/


// n회 반복하면서 특정 일을 하는 함수

function foo (n, f) {  //함수를 매개변수에 담기
    for (var i = 0; i < n; i++) {
        f();            //함수 리터럴 (함수를 값으로 표현한다.)
    }
}

       // 함수 리터럴 (함수를 값으로 표현한다.)
foo(3, function() {
    console.log(`안뇽!`);
});      //함수 호출할 때 함수 정의하기


foo(2, function() {
    console.log(`안뇽!`);
    console.log(`메롱~`);
});      //함수 호출할 때 함수 정의하기

foo(2, () => console.log(`빠빠이~`));   //화살표 함수도 가능


console.log(`==========================`);

// 정수 n을 전달하면 1부터 n까지의 숫자를
//특정 조건에 따라 출력하는 함수

//cb(콜백함수) : i의 특정 조건을 담고 있는 함수
function showNumber(n, cb) { 
    for (var i = 1; i <= n; i++){
        if (cb(i)){
            console.log(i);
        }
    }
};

//1~10까지 3의 배수 출력
showNumber(10, x => x % 3 === 0);
// cb(i) = function(x)

//1~100까지의 24의 배수 출력
showNumber(100, m => m % 24 === 0);

//1~10까지의 숫자 중 홀수만 출력하는데
//홀수 하나 출력할 때마다 메롱이라고  출력
showNumber(10, function(j){
    console.log(`메롱`);
    return j % 2 === 1;
})

console.log(`==========================`);

function customFilter(arr, predicate){
    var resultSet = []; //필터링 후의 배열
    for (var i = 0; i < arr.length; i++){
        if (predicate(arr[i])){
            resultSet.push(arr[i]);
        }
    }
    return resultSet;
}

//filter 메서드를 활용
var numbers = [10, 20, 30, 22, 53, 63, 250];
var result = numbers.filter(n => n <= 50);
console.log(result);

//함수로 customFilter를 만들어 활용
var results = customFilter(numbers, n => n <= 50);
console.log(results);

var results2 = customFilter(numbers, n => n % 3 === 0);
console.log(results2);