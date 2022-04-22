// 1~10까지의 누적 합 구하기

var x = +prompt('첫 번째 숫자를 입력하세요');
var y = +prompt('두 번째 숫자를 입력하세요');

// 값 스위칭
if (x > y) {
    var t = x;
    x = y;
    y = t;
}

var total = 0;
var n = x;
while (n <= y) {
    total += n;
    n++;
};

alert(`${x}부터 ${y}까지의 누적합: ${total}`);


/*

// 1부터 10까지의 총합
var total = 0; //총합을 저장할 변수
var k = 1;
while (k <= 10) {
    total += k;
    k++;
}
console.log(`총합 : ${total}`);

여기에서 변수를 잘 설정해서 차근차근 해보자
*/
