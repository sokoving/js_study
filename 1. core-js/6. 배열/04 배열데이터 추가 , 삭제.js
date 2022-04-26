/*
프로그램 실행 중에는 코드에 직접 배열 요소 수정 불가
>>배열 메서드를 사용하여 실행 중 배열 요소를 수정한다

실제 사용할 때는 button을 누르면
    pets.push('데이터') 코드가 실행되면서
    li에 데이터가 추가된다.

pets.push(`끝에`, `데이터`, '추가');
pets.pop();
pets.shift();
pets.unshift('처음에', '데이터', '추가");
*/

var pets = ['멍멍이', '야옹이', '짹짹이'];
console.log(pets);
console.log(pets.length);

// push() : 배열 맨 끝에 데이터를 추가
         // 여러 개 추가 가능
pets.push('어흥이');
console.log(pets);
pets.push('징징이', '꽥꽥이'); 
console.log(pets);
console.log(pets.length);


// pop() : 배열의 맨 끝 요소를 제거
pets.pop();     //빈 괄호
console.log(pets);
/* pop을 이용해 요소 모두 지우기
while (pets.length > 0){
    pets.pop();
}
console.log(pets); */

// shift() : 배열의 첫 번째 요소 제거
pets.shift();
console.log(pets);

// unshift() : 배열의 맨 앞에 요소를 추가
pets.unshift('꿀꿀이');
console.log(pets);
