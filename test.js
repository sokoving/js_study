

// 즉시 실행 함수 (익명 함수)
// ()안에 
(function () {
    var a = 10, b= 20;
    console.log(a+b);
})();
//a, b를 전역 변수가 아닌 익명 함수 안으로 한정해 저장공간 관리에 도움

//함수 정의 기본 2
// 함수 리터럴 (함수를 값으로 표현, 변수 선언에 함수 사용 가능)
var sub = function(n1, n2) {
    return n1 - n2;
};

console.log(typeof sub); // funtion
console.log(sub(10, 3)); //7

var plus = sub; //  sub 함수를 plus라는 변수에 대입
                // 긴 이름의 함수를 축약해서 부를 수 있음
console.log(typeof plus); // funtion