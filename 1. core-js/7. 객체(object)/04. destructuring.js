/* 
    Destructuring(디스트럭쳐링)
    - 기존에 구조를 가지고 있던 객체를 파괴하고 별도의 변수에 값을 할당하는 것
     + 객체 안의 어떤 값을 쉽게 추출할 수 있다

*/

// ES5
    // 프로퍼티명으로 객체 값 추출해 다른 객체에 할당하기
var obj = { firstName: 'Ungmo', lastName: 'Lee'};
var full_name = {};

full_name.firstName = obj.firstName;
full_name.lastName = obj.lastName;

console.log(full_name);

// ES6
    // 프로퍼티명으로 변수 선언하고 값을 받기
const obj2 = { first_name: 'Ungmo', last_name: 'Lee'};
const {first_name, last_name}= obj2;
// const {f, l} = obj2;  (X)
console.log(full_name);

    // 변수와 프로퍼티 이름만 같다면 순서와 변수 수는 상관없다
const {prop2} = {prop1: 'a', prop2: 'b'};
console.log("prop2 : " + prop2);

    // 중첩 객체에서는 중첩 객체로 형태를 맞춰줘야 값을 받을 수 있다
        // 사용은 프로퍼티값이 아니라 변수 이름으로
function settings(){
    return { display: {color: 'red'}, keyboard: {layout: 'qwerty'}};
}
const {display: {color: displayColor}, keyboard: {layout: keyboardLayout}}= settings();
// console.log("displayColor : "  + display, ", keyboardLayout : " + keyboard);
console.log("displayColor : "  + displayColor, ", keyboardLayout : " + keyboardLayout);

