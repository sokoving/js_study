

// 2차원 배열 : 배열의 요소가 또다시 배열인 경우
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var arr2d = [arr1, arr2, arr3, [10, 11, 12]];

console.log(arr2d); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

console.log(`=====2차원 배열의 길이=======`);

console.log(arr2d.length); //4

console.log(`======2차원 배열의 참조======`);

console.log(arr2d[0]);  // [ 1, 2, 3 ]
console.log(arr2d[3]);  // [ 10, 11, 12 ]
console.log(arr2d[0][2]);   // 3
console.log(arr2d[3][0]);   // 10

console.log(`=====2차원 배열의 수정=======`);
arr2d[2][1] = 88;
console.log(arr2d);
arr2d[1] = [100, 200, 300];
console.log(arr2d);

console.log(`=====2차원 배열의 삭제=======`);
arr2d.splice(0, 1);
console.log(arr2d);
arr2d[1].splice(1, 1);
console.log(arr2d);


console.log(`=====2차원 배열에 push======`);
arr2d[2].push(999);
arr2d.push(999);
console.log(arr2d);

console.log(`=====2차원 배열의 타입======`);
console.log(typeof(arr2d));     //object
console.log(typeof(arr2d[2]));      //object
console.log(typeof(arr2d[2][1]));       //number

console.log(`=====2차원 배열의 산술연산======`);
var result1 = arr2d[0] * arr2d[1];
console.log(result1);       //NaN
var result2 = arr2d[0][0] * arr2d[1][0];      //숫자 타입끼리만 연산 가능
console.log(result2);       //700;

console.log(`=====2차원 배열에 pop======`); 
console.log(arr2d);
arr2d.pop();   // 맨 마지막 요소 하나 삭제
console.log(arr2d);
arr2d.pop();   // 2차원 배열의 맨 마지막 배열 통째로 삭제
console.log(arr2d);
arr2d[1].pop(); // 1차원 배열의 마지막 요소 하나 삭제
console.log(arr2d);
// arr2d[0][0].pop();  > 배열이 아닌 요소에 pop하라고 한 셈 > 에러

console.log(`===================2차원 배열의 반복문=======================`);

var arr2d_2 = [
    ['a', 'b', 'c'],
    ['가', '나','다'],
    ['d', 'e', 'f']
]
console.log(`=====2차원 배열의 for~of ======`);
for( var ar of arr2d_2){   //for~of는 배열의 길이만큼 반복 > 3번 반복
    console.log(`메롱: ${ar}`);
}
console.log(`=====2차원 배열 for~of nesting ======`);
// 2차원 배열에서 1차원 배열의 요소까지 꺼내려면 중첩 loop가 필요하다

for (var arr of arr2d_2){       //arr(1차원 배열) of arr2d_2(2차원 배열)
    for (var s of arr){         //s(1차원 배열의 요소) of arr(1차원 배열)
        console.log(`메롱: ${s}`);
    }
}