// 외부 JS 파일 로딩 : 다른 외부파일에서 내보낸 전역변수, 함수를 app.js에 가져와 사용하기.
// 1. import {x, hello} from './kim.js';  >> 김씨 것만 가져오기

// 2. 조각 css파일의 변수에 별칭을 붙여 처리
import * as k from './kim.mjs';  //kim.js에서 가져온 모든 전역변수, 함수는 별칭 k을
import * as p from './park.mjs'; //park.js에서 가져온 모든 전역변수, 함수는 별칭 p를 붙여 둘 다 사용할 수 있다.

//app.js  메인 파일

const $box = document.querySelector('.box');
// console.log($box);
$box.textContent = '안녕';

//////////////////
console.log(k.x);  
console.log(p.x);

k.hello();
p.hello();

// 조각 모듈파일 확장자는 보통 .mjs를 사용