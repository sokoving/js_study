// 입력받은 정수를 1의 자리만 나열하기 (15 > 123456789012345)

var targetNum = +prompt('양의 정수를 입력해 주세요: ');
var x = 1;
var y = '';

if (targetNum >= 1){
    while(x <= targetNum){
        y += (x % 10);
        x++;
    }
} else {
    alert('양의 정수만 입력해 주세요.')
}
alert(y);