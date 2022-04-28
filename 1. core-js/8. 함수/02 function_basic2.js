//함수를 사용하면 코드의 재활용, 콤팩트한 코딩 가능 

function makeLine() {
    console.log(`===========================`);
}

makeLine();
makeLine();
makeLine();
makeLine();

//원의 넓이를 구해야 함 (pi * r **2)
var pi = 3.14159265;

//반지름이 5인 원의 넓이
var circle1 = pi * 5 ** 2;

//원이 넓이를 구해주는 함수 정의
function calcAreaCircle(r) {
    return pi * r ** 2;
}

//함수를 사용하여 반지름이 5인 원의 넓이 계산
var result1 = calcAreaCircle(5);
console.log(result1);

var result2 = calcAreaCircle(17);
console.log(result2);