//입력받은 정수의 자릿수 구하기

// 뒤집어야 할 정수
var targetNum = +prompt('양의 정수: ');
var tnCopy = targetNum; 
var count = '0';    //자릿수를 기억할 변수

if (targetNum >= 1) {
    while (targetNum > 0) {
        targetNum = parseInt(targetNum / 10);
        count++;
    }

    alert(`${tnCopy}는 ${count}자리입니다.`);
} else {
    alert('양의 정수만 입력해주세요.');
}
