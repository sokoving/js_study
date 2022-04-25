/*
 몇 개의 *을 표시할까요? 33
 몇 개마다 줄을 바꿀까요? 5
 */

var num = 33;  //총 별의 숫자
var width = 5;  // 줄바꿈할 별의 개수
var star = '';  // 별을 저장할 변수

//총 줄 수 구하기
var line = parseInt(num / width);

for (var i = 0; i < line; i++) {
    for(var j = 0; j < width; j++) {
        star += '*';
    }
    star += '\n';
}

//남은 별의 개수 구하기
var rest = num % width;

if (rest > 0) {
    for (var k = 0; k < rest; k++) {
        star += '*';
    }
}

console.log(star);

/* 
for (var i = 1; i <= num; i++){
    if (i % width !== 0){
    star += '*';
    } else {
        star += '*\n';
    }
}

console.log(star);
*/