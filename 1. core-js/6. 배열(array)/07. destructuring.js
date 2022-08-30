/* 
    Destructuring(디스트럭쳐링)
    - 기존에 구조를 가지고 있던 배열을 파괴하고 별도의 변수에 값을 할당하는 것
     + 배열 안의 어떤 값을 쉽게 추출할 수 있다

*/

// ES5
    // 인덱스를 이용해 배열의 값 추출 변수에 할당
var arr = [1, 2, 3];
var one = arr[0]; // 1
var two = arr[1]; // 2
var theree = arr[2]; // 3


// ES6
    // [대괄호]를 사용해 변수를 배열처럼 만들어 배열의 값 받기
const arr = [1, 2, 3];
const [one, two, three] = arr;
// one = 1, two = 2, three = 3;
let [x, y, z] = arr;
// x = 1, y = 2, z = 3

// 배열 디스트럭쳐링의 다양한 표현 방법
let a, b, c;
    // 변수 배열의 길이 = 배열의 길이
[a, b] = [1, 2];       // a = 1, b = 2
    // 변수 배열의 길이 > 배열의 길이
[a, b] = [1];         // a = 1, b = undefined
    // 변수 배열의 길이 < 배열의 길이
[a, b] = [1, 2, 3];   // a = 1, b = 2
[a, , z] = [1, 2, 3]; // a = 1, b = 3

    // 기본값 설정
[a, b, c=3] = [1, 2];       // a = 1, b = 2, c = 3
[a, b= 10, c = 3] = [1, 2]; // a = 1, b = 2, c = 3

    // 스프레드 연산자(spread operator)
[a, ...b] = [1, 2, 3];   // a = 1, b = [2, 3]