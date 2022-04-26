/*
 콘솔창에 배열의 요소들을 순회하여
  -짜장면과 짬뽕과 볶음밥과 마라탕과 탕수육!!
 이라는 문장을 완성해서 출력하세요

> index를 사용할 수 있는 for문 사용
*/

var foods = ['짜장면', '짬뽕', '볶음밥', '마라탕', '탕수육'];

var message = '';

for ( var i = 0; i < foods.length; i++){
    if(i !== foods.length - 1){
        message += `${foods[i]}과 `;
    } else {
        message += `${foods[i]}!!`;
    }
}
console.log(message);


// for ( var i = 0; i < foods.length; i++){
//     if(i < foods.length - 1){
//         message += `${foods[i]}과 `;
//     } else {
//         message += `${foods[i]}!!`;
//     }
// }
// console.log(message);
