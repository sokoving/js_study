// const (constant: 상수 - 유일성과 불변성)

// 원주율
const pi = 3.14159265;
// pi = '메롱';
console.log(5 * 5 * pi);

for (let i = 0; i < 3; i++) {}

// const 와 객체 (객체, 배열, 함수)
const person = {
    name: '김철수',
    age: 35
};
const dog = {
    name: '초코',
    age: 4
};
// person = dog;
person.age = 36;
console.log(person);



const numbers = [10, 20, 30];
numbers[1] = 999;

// numbers = [000, 999, 33, 44];
console.log(numbers);