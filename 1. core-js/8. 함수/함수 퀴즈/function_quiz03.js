/*
    1개의 정수를 전달받아 해당 정수의 
    3제곱 값을 반환하는 함수 cube를 작성하시고

    사용자에게 숫자를 입력받은 후
    cube를 호출하여 3제곱값을 출력하세요.
*/

function cube(num) {

    return num ** 3;

} // end cube functon

var userNum = +prompt(`세제곱 할 숫자를 입력하세요`);

var result = cube(userNum);
alert(`${userNum}의 세제곱 값은 ${result}입니다.`);