//입력받은 수많큼의 줄만큼 특수기호 * 표시
var x = +prompt('양의 정수: ');

if (x > 0) {
    var star = '';
    var i = 1;
    while (i <= x) {
        star += '\n*';
        i++;
    }
    console.log(star);
}
