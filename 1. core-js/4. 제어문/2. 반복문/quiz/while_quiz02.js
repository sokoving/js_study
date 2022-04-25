//입력받은 수많큼 특수기호 *를 한 줄로 출력하기

var x = +prompt('양의 정수: ');

if (x > 0) {
    var star = '';
    var i = 1;
    while (i <= x) {
        star += '*';
        i++;
    }
    console.log(star);
}


/*
var a = '';
var b = '*';
var x = 1;
var y = +prompt('양의 정수: ');
if (x > 0) {
while  (x <= y) {
    a += b
    x++;
}
alert(a)
}
*/