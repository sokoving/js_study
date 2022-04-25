/*
 난수(랜덤값) 생성
Math.random() : 0.0 이상 1.0 미만 범위 내 실수를 제시
Returns a pseudorandom number between 0 and 1.
*/

var rn = Math.random();
console.log(`랜덤값: ${rn}`);

if (rn > 0.66) {
    console.log(`오늘 저녁은 삼겹살`);
} else if (rn > 0.33) {
    console.log(`오늘 저녁은 샐러드`);
} else {
    console.log(`오늘 저녁은 아리수`);
}

console.log(`=================`);

// 내림, 올림, 반올림
console.log(Math.floor(3.789));   //내림
console.log(Math.ceil(3.289));   //올림
console.log(Math.round(3.16));   //반올림


console.log(`=================`);

/*
 1 이상 10 이하의 랜덤 정수 생성

 Math.random();                       >> 0.0 <= num <  1.0
Math.random() * 10;                  >> 0.0 <= num < 10.0
Math.floor(Math.random() * 10);      >> 0 <= num < 10
Math.floor(Math.random() * 10) + 1;  >> 1 <= num < 11

*/

var ri = Math.floor(Math.random() * 10) + 1;

for ( var i = 0; i <10; i++){
    ri = Math.floor(Math.random() * 10) + 1;
    console.log(`1 이상 10 이하의 랜덤 정수 : ${ri}`);
}

console.log(`=================`);

// 117 이상 163 이하의 랜덤 정수 생성

var ri = Math.floor(Math.random() * 47 + 117;

console.log(`=================`);

// x 이상 y 이하의 랜덤 정수 만들기 공식(외우기)

Math.floor(Math.random() * (y - x + 1)) + x;

/*
 Math.random()에 (최대값-최소값+1)를 한 후
 Math.floor(내림)하고
 최소값 더하기
*/

