/*
옆으로 긴 직사각형을 그립니다.
한 번(1) : 7
한 번(2) : 3
* * * * * * *
* * * * * * * 
* * * * * * * 

7, 3 입력과 3, 7 입력 결과가 같아야 함.
*/


var width = 3;
var height = 7;
var star = '';

if (width < height) {       // 가로, 세로 보정
    var x = width;
    width = height;
    height = x;
}
for ( var j = 0; j < height; j++){ //세로로 늘리기
    for ( var i = 0; i < width; i++){ // 가로 별 찍기
        star += '*  ';
    }
    star += '\n';
}

console.log(star);

