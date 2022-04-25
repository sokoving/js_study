// 프로그램 내에서 사용한 데이터를 저장해놓고 쓰고 싶어요 

/* 1. 변수를 선언(=변수를 만들다)
   var는 변수 선언할 때 처음 한 번만 */
var result;
// 한 줄에 여러 변수 선언 가능
var user, age;
var user = 'John', age = 25, message = 'Hello';

/*2. 변수의 초기화(=initialize : 값을 저장)(reset X)
        =는 대입의 의미(동등 X)
        10+20의 값을 변수 result에 대입해라(저장해라)
        변수는 항상 좌항에 따옴표 없이*/
result = 10 + 20;


// result에 저장된 값을 화면에 출력해라
console.log(result);

/*3. 변수의 값 재할당(수정, 변경)
변수의 값은 언제는 변경 가능*/
result = 50;

console.log(result);

//4. 변수에 변수값을 저장
result = result * 2;
console.log(result);

// 주의. 
console.log(result + 10); //110을 출력하지만 result 변수값은 변하지 않음
console.log(result);     //100

// 변수는 선언과 초기화를 동시에 할 수 있음 (1과 2를 동시에)
var number = 70;

//변수끼리의 연산도 가능
console.log(result - number);

number = result - 10;
console.log(number);

            // 주의. 문자열을 저장할 때는 따옴표 사용('', "", `` 다 가능).
var friend_name = '고길동';
