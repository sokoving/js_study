// break; 반복문 즉시 탈출

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;      //4까지 출력하고 종료
    }
    console.log(i);
}
console.log('반복문 끝');

console.log(`==================`);

for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;     //5까지 출력하고 종료
    }
}
console.log('반복문 끝');

console.log(`==================`);
for (var i = 0; i < 3; i++){
    for (var j = 0; j < 2; j++){
        if (i === j) {
            break;      // 가장 가까운 for를(inner for) 탈출함
        }
        console.log(`${i}, ${j}`);
    }
}


console.log(`==================`);
var m = 0;
while (++m < 5){
    console.log(m);
    if (m % 3 === 0) break;    //while을 탈출해 다음 console.log로 바로 감
}

console.log(`반복문 종료 m: ${m}`);

console.log(`==================`);
var m = 0;
while (m++ < 3){           // 부등호 참거짓 체크 후 m+1
    console.log(m);
}

console.log(`반복문 종료 m: ${m}`);

console.log(`==================`);
var m = 0;
while (++m < 3){           // m+1을 한 뒤 부등호 참거짓 체크
    console.log(m);
}

console.log(`반복문 종료 m: ${m}`);