// 입력받은 수많큼 +과 -를 번갈아가며 한 줄로 출력하기 ( 3 > +-+)
var x = +prompt('양의 정수: ');

if (x > 0) {
    var mark = '';
    var i = 1;
    while (i <= x) {
        if (i % 2 == 1) mark += '+';
        else mark += '-';
        i++;
    }
    alert(mark);
}