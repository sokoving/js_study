// 사각형의 높이
var height = 3;
var star = ''; //별 저장

for (var j = 0; j < height; j++){   //3. 1,2 를 3번 반복
    for (var i = 0; i < height; i++){   // 1. 별을 3번 가로로 찍고
        star += '*\t';
    }
    star += '\n'        // 2. 엔터 한 번
}
console.log(star);