// 함수 정의부

console.log(`1. 함수 정의 1`);
function add(n1, n2) {
    return n1 + n2;
};

console.log(`1. 함수 정의 2`);
// 함수 리터럴 (함수를 값으로 표현)
var sub = function(n1, n2) {
    return n1 - n2;
};

// 변수 선언에 함수 사용 가능
var plus = add;

// 긴 이름의 함수를 간단한 이름의 변수에 저장해 약어처럼 함수 호출 가능
function removeBoardArticleWithReplyText() {}
var rb = removeBoardArticleWithReplyText;
rb();


console.log(`1. 함수 정의: 3. 화살표 함수 (ES6+)`);

function multiply(n1, n2){  // 기본
    return n1 * n2;
};

var multiply = function (n1, n2){   // 함수 리터럴
    return n1 * n2;
};

// 함수의 내용물이 return문 딱 하나일 경우 return 생략 가능
var multiply = (n1, n2) => n1 * n2; // 화살표 함수


var sayNickName = function(nick){
    console.log(`${nick}님 안녕~`);
    return nick + ' 메롱~';
};

var sayNickName = nick => {
    console.log(`${nick}님 안녕~`);
    return nick + ' 메롱~';
};

var hello = function() {
    console.log(`hello!!!`);
};
//만약에 함수의 코드가 한 문장이라면 중괄호 생략 가능
var hello = () => console.log(`hello!!!`);

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
//화살표함수 sqrt를 작성해 보세요.

var sqrt = n => n ** 2;
sqrt (4);


// 중첩 함수
function outer() {
    console.log(`outer call!!`);    

    function inner() {
        console.log(`inner call!!`);
    }
                     //inner는 outer의 전용 함수(외부에서 사용 불가)
    inner();        //inner의 호출을 outer 안에서만 할 수 있도록 제한
    inner();        //중요 기능을 통제하기 위함.

}

// 재귀 함수(Recursive)
function countdown(n) {
    if (n < 0) {             // 탈출문 필수
        return;
    }
    console.log(`${n}!!`);  //자기 호출을 해서 반복문의 형태가 됨.
    countdown(n-1);         //반복문으로도 동일한 기능이 가능하니 탈출 자신 없으면 쓰지 말 것.(근데 시험에는 자주 나옴)
}

//문제
function compute(num) {
    if (num <= 1) return num;
    return compute(num-1) + compute(num - 3);
}

var r = compute(4); // r = ?

/* 풀이
compute(4) = compute(3) + compute(1) = 0 + 1 = 1
compute(3) = compute(2) + compute(0) = 0 + 0 = 0
compute(2) = compute(1) + compute(-1) = 1 + -1 = 0
compute(1) = 1
compute(0) = 0
compute(-1) = -1
*/
//=======================================//
// 코드 실행부
/* 즉시 실행 함수(익명 함수, void)
    (실제 실행할 함수를 ()로 감싸 이름으로 만들어버리고) ();를 붙여 함수 정의와 동시에 호출한다.
    이때 사용함 변수들은 전역이 아닌 함수 안에서만 한정 사용되기 때문에 리소스(?) 관리에 좋다고 함. */
(function () {
    var a = 10, b = 20;
    console.log(a + b);

    console.log('===================');  
    
    console.log(typeof sub); //funtion
    console.log(sub(10, 3)); //7
    console.log(typeof plus); //funtion
    console.log(plus(20, 30)); // 50
    
    hello();
    hello();
    hello();
    console.log('===================');  

    outer();
    // inner();   >> 안 됨 : inner는 outer 함수의 전용함수라 밖에서는 못 씀

    console.log('===================');  

    countdown(5);
    
    console.log('===================');  

    var r = compute(4);
    console.log(`compute(4) : ${r}`);
})();


