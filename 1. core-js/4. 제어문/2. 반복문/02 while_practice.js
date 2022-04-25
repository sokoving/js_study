// 구구단 5단 출력
var level = 5; //단수
var n = 1;
while (n <= 9){
    console.log(`${level} X ${n} = ${level*n}`);
    n++;
}


console.log(`=============================================`);

// 1부터 20 사이의 정수 중 홀수만 출력
/* 방법 1
var m = 1;
while (m <= 20) {
    console.log(m);
    m += 2;
}
*/

var m = 1;
while (m <= 20) {
    if (m % 2 === 1) {  //m을 2로 나눠서 나머지가 1이면 m을 출력
        console.log(m);
    }
    m++;                //주의. m++;이 if 안에 있으면 무한 루프
}

console.log(`=============================================`);

// 18부터 32 사이에 3의 배수만 출력  18 21 24 27 30
var k = 18;
while (k <= 32) {
    if(k % 3 === 0){
        console.log(k);
    }
    k++;
}

console.log(`=============================================`);

// 1부터 4000 사이에 있는 정수 중 12의 배수의 개수

var count = 0;

var z = 1;
while (z <= 4000){
    if (z % 12 === 0) {
        count++;
    }
    z++;
}

console.log(`총 개수 : ${count}개`);