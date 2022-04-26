// Falsy
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ('') console.log('ok4'); //빈문자 falsy
if (NaN) console.log('ok5');

console.log(`================`);
// Truthy (위 5개 falsy 빼고 다)
if (1) console.log('ok6');
if (-77.999) console.log('ok7');
if ('메롱') console.log('ok8');
if ('  ') console.log('ok9');  //공백도 truthy
if ([1,2,3]) console.log('ok8');
if ([]) console.log('ok9');


/* if는 (조건)이 참일 때 출력, else는 (조건)이 거짓일 때 출력
    >> (조건)을 명확히 써야 원하는 값을 출력할 수 있다
*/

console.log(`================`);

var num = 8;
if (num % 2){       //  8%2는 0 > falsy
    console.log('짝수입니다.'); //true일 때 출력
} else {
    console.log('홀수입니다.'); // falsy일 때 출력
}

console.log(`================`);

var apple = 0;
if (apple) {
    console.log(`사과가 ${apple}개 있습니다.`);
} else {
    console.log(`사과가 하나도 없습니다.`);
}

console.log(`================`);

var result;
if (result) {       //result를 초기화하지 않았기 때문에 undefined > falsy
    console.log('안녕!');
}

console.log(`================`);

var n = 99;
// while (n)  >> 99는 truthy이기 때문에 무한루프가 됨