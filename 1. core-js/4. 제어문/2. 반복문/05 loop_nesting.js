//중첩 반복문

for (var level = 2; level <=9; level++) {
    for ( var line = 1; line <= 9; line++){
        console.log(`${level} X ${line} = ${level*line}`);
    }  // end ininer for
    console.log(`============================`);
} // end outer foer

/*
level line  log
  2     1   2 X 1 = 2       
        2   2 X 2 = 4
          ...
        9   2 X 9 = 18
        10
            ========
  3     1   3 X 1 = 3      
      ...
  9     9  9 X 9 = 81
*/

console.log(`============================`);
// 중첩이 많이 쌓이면 숫자가 곱셈으로 늘어나기 때문에 부하가 걸린다

for (var i = 0; i < 3; i++){     
    console.log('짹짹');        // 3회 루프
    for (var j = 0; j < 4; j++){       
        console.log('메롱');        // 3*4회 루프
        for (var k = 0; k < 2; k++){       
        console.log(`안녕! ${i}-${j}-${k}`);    // 3*4*2회 루프
        }
    }
}

