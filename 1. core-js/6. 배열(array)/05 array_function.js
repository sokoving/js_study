/*
1. 배열의 인덱스 반환
   arr.indexOf(element) : 첫번째로 일치한 인덱스 반환
   arr.lastIndexOf(element) : 마지막으로 일치한 인덱스 반환

2. 배열의 사본 추출
   arr.slice(start idx, end idx) : start idx 이상, end idx 미만의 요소 추출
            (start idx) : start idx 이상부터 배열 끝까지의 요소 추출
            () : 배열 전체 사본 추출(백업용으로 많이 씀)
# 주의: var arrCopy = arr;  >> 사본이 아님
   
3. arr.reverse() : 배열을 역순으로 재배치
                  > arr 원본이 수정됨
                  > 사본을 만들어 역순 재배치.

4. arr1.concat(arr2)
            배열 2개를 결합한 사본을 가져옴
            1 > 2 순서로 사본 저장
            괄호() 안에는 배열 여러 개 나열 가능(arr2, arr1, arr1)

5. arr.includes(element)
            배열에 특정 요소가 있는지 여부 확인
            논리값으로 반환
                > 조건문이나 삼항연산자에 활용 가능


6. 배열의 요소 수정 : 배열의 특정 요소 제거, 삽입
    arr.splice(start idx)
//다시 수정


# 위 메서드들은 반복문으로도 구현 가능

*/


var foods = ['김말이','닭꼬치','어묵','볶음밥','짜장면','짬뽕'];


//1. arr.indexOf(element) : 배열 요소의 인덱스를 알려줌 
var idx = foods.indexOf('볶음밥');             //첫번째로 일치한 인덱스 반환
var idxLast = foods.lastIndexOf('닭꼬치')      //마지막으로 일치한 인덱스 반환

//탐색 알고리즘
var idxFor = 0;
for (var f of foods){
    if (f === '볶음밥'){
        break;
    }
    idxFor++;
}

console.log(`찾은 인덱스 : ${idx}`); 
console.log(`찾은 마지막 인덱스 : ${idxLast}`);
console.log(`찾은 인덱스 : ${idxFor}`); 


// 2. arr.slice(start idx, end idx) : 배열을 부분 추출하여 사본 배열로 반환
console.log(`==============================`);
var copyFoods = foods.slice(2, 5);  //2번부터 5번 미만까지 추출(2, 3, 4)
console.log(foods);
console.log(copyFoods);

var copyFoods2 = foods.slice(2);  //end 생략 > 3번부터 배열 끝까지 추출
console.log(copyFoods2);

var copyFoods3 = foods.slice();  // 배열 전체 사본 추출(원본 백업용)
console.log(copyFoods3);

//사본 생성시 주의사항
console.log(`==============================`);
var numbers = [10, 20, 30];
var numbers2 = numbers;         //요소 데이터가 저장된 주소를 변수 2개로 저장한 셈
var numbersCopy = numbers.slice();

numbers2[1] = 999;
numbers[0] = 777;
numbersCopy[0] = 666

console.log(`원본 : [${numbers}]`);
console.log(`사본(가) : [${numbers2}]`);
console.log(`사본(진) : [${numbersCopy}]`);



// 3. arr.reverse() : 배열을 역순으로 재배치 (원본 수정)
console.log(`==============================`);
var nums = [10, 20, 30, 40, 50];

var numsCopy = nums.slice();
numsCopy.reverse();         //for문으로 구현 가능(0<>length-1, 2<>length-2 ...)

console.log(nums);          //원본
console.log(numsCopy);      //사본을 만들어 역순


// 4. arr1.concat(arr2) : 배열 2개를 결합한 사본을 가져옴
//                        1 > 2 순서로 사본 저장
//                        괄호() 안에는 배열 여러 개 나열 가능(arr2, arr1, arr1)
console.log(`==============================`);
var arr1 = [50, 70, 100];
var arr2 = [0, 5, 1, 10, 20];

var concatCopy = arr2.concat(arr1);
console.log(concatCopy);
console.log(arr1);
console.log(arr2);

// 5. arr.includes(element) : 배열에 특정 요소가 있는지 여부 확인
console.log(`==============================`);
var result = foods.includes('닭');
console.log(`요소 탐색 여부 : ${result}`);

//includes는 논리값으로 반환되기 때문에 삼항연산자, 조건문에 활용 가능
var result2 = foods.includes('족발') ? '^^' : 'ㅜㅜ' ;  
console.log(result2);   

if (foods.includes('짬뽕')) {
    console.log('잘 먹겠습니다!');
} else {
    console.log('ㅠㅠ');
}


// 6. arr.splice(start idx, del count num, 추가할 데이터)
// 배열의 특정 요소 제거, 삽입
// 0번 수정(삭제 - shift, 추가 - unshift)
// 중간 수정(splice)
// length-1 수정(삭제 - pop, 추가 - push)
console.log(`==============================`);
var pets = ['멍멍이', '야옹이', '짹짹이', '고란이'];
console.log(pets);

// 1번 인덱스부터 2개 요소 삭제
pets.splice(1, 2);
console.log(pets);

// 0번 인덱스부터 1개를 삭제하고 그 자리에 어흥이 삽입
pets.splice(0, 1, '어흥이');
console.log(pets);

// 1번 인덱스에 징징이 삽입 (1번 인덱스부터 0개 삭제하고 징징이 삽입)
pets.splice(1, 0, '징징이');
console.log(pets);

// 2번 인덱스부터 끝까지 삭제
pets.splice(2);
console.log(pets);
