/* 정리
# 매개변수 (parameter)
 함수를 정의할 때 함수 호출부에서 전달한 값을 받아서 저장하는 변수
 함수를 호출할 때 선언이 된다
 이름 지을 때 구체적으로 짓는 게 좋음

# 인수 (argument)
 함수를 호출할 때 함수에게 전달하는 값

# 함수 정의
function add(n1, n2) { 
    console.log('함수 실행!');
    return(n1 + n2);            << 매개변수 n1, n2
}

# 함수 호출과, 반환값을 result에 저장
var result = add(10, 20);       << 인수 10, 20


+매개변수가 없는 함수도 가능.
하지만 괄호()를 빼놓지 말어라.
*/


function makeLine() {
    console.log(`===========================`);
}


// 매개변수 (parameter)
// 함수를 정의할 때 함수 호출호출부에서 전달한 값을 받아서 저장하는 변수

function add(n1, n2) {
    console.log('함수 실행!');      // add를 실행하면 '함수 실행' 작동
    return(n1 + n2);                // 더한 값을 변수에 저장할 수 있다.
}

//함수 호출
console.log(add(10, 20)); //console.log(30);
makeLine()

add(20, 50);
makeLine()

var number = add(20, 50); // var number = 70;
console.log(number);
makeLine()


// x~y까지의 총합을 구해야 함
// ex) 1~10까지의 총합 : 55, ex) 3~5까지 : 12

function calcRangeTotal (begin, end) {      //x와 y의 선언을 function 쓸 때 해줘야 함
    var total = 0;
    for ( var n = begin; n <= end; n++) {
        total += n;
    }
    return total;          // function의 결과 total을 원하는 변수에 저장할 수 있다.
}

var r1 = calcRangeTotal(); // var r1 = 55;
console.log(r1);


makeLine()
/*
인수(argument) : 함수를 호출할 때 함수에게 전달하는 값. >> 1, 10
매개변수(parameter) : 인수가 저장되는 변수 >> x, y
*/

//매개변수의 기본값
// 함수 호출할 때 인수를 쓰지 않고 빈괄호로 놔두면 기본값(undifined)으로 나온다
// ES6부터는 함수 정의할 때 =''를 이용해서 편하게 기본값 변경이 가능하다
// 기본값을 자주 쓰는 값으로 넣어놓으면 함수 호출할 때 편함

function sayHello(language='한국어') {  //(ES6) 기본값 세팅

    //ES5
    // language = language || '한국어';  >> OR 연산자의 단축평가를 활용해 기본값 세팅

    if (language === '한국어') {
        console.log(`안녕하세요~`);
    } else if (language === '영어') {
        console.log(`Hello~`);
    } else if (language === '중국어') {
        console.log(`Da Jia Hao~`);
    } else {
        console.log(`뭔지 모름`);
    } 
}

sayHello(); 

//매개변수 X return X (실행 결과가 항상 같음)
function rdd() {
    console.log(`링딩동 링딩동 링디기디기딩딩딩~`);
}

rdd();
makeLine();

//매개변수 X return O (실행 결과가 다를 수 있음)
function seletRandomPet(){
    var pets = ['멍멍이', '야옹이', '짹짹이', '어흥이', '부엉이']
    //0~4까지의 랜덤 정수
    var rn = Math.floor(Math.random()*pets.length);
    return pets[rn];
}

console.log(`선택된 동물: ${seletRandomPet()}`);

