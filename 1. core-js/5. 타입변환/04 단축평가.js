
/*
  논리 연산자(||나 &&)에 논리 타입이 아닌 피연산자가 왔을 때
  참 거짓을 가르는 데 결정적인 변수를 선택한다.
  */

// OR 연산
console.log('hello' || 'world');  //hello
console.log(0 || '안녕');         //안녕

console.log(`=======================`);

// AND 연산
console.log('hello' && 'world'); //world
console.log(null && '잘 가');    //null

console.log(`=======================`);

// 단축평가 적용
var x = 10;
x > 0 && console.log('안녕하세요~');  //안녕하세요~

/* 같음
if ( x > 0 ) {
    console.log('안녕하세요~');
 }
 */
