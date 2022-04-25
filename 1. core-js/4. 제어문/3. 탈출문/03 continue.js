/*
break와 countinue의 차이점
 break는 해당 조건을 기점으로 반복문을 종료
 countinue는 해당 조건만 건너뛰고(빼고) 반복문 수행(skip)
    for문은 증감식으로, while문은 조건식으로 이동
*/

for ( var i = 1; i <= 10; i++){
    if (i % 2 === 0) continue; // skip
    console.log(i);
}

console.log(`=============`);

while (true) {
    var n = +prompt('숫자를 입력!');
    if (n === 0) {
        break;      // 0을 쓰면 반복문 종료
    } else if ( n === 1) {
        continue;   // 1을 쓰면 다시 promp로 돌아감
    }
    alert('메롱~~~') // 나머지 숫자는 '메롱' alert
}

alert('끝났지롱~~')