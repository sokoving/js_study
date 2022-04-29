// 2개의 정수를 전달하면 그 합을 구해주는 함수
function add2(n1, n2) {
    return n1 + n2;
}

function add3(n1, n2, n3) {
    return n1 + n2 +n3;
}

// n개의 정수를 전달하면 그 합을 구해주는 함수
//매개변수를 배열이나 객체로 하면 여러 값을 받을 수 있다
function addAll(numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

var result1 = addAll([10, 20, 60]);   // 호출 시점에 []로 배열을 만듦.
console.log(result1);                 // [] 없으면 10만 들어감

//ES6+ : spread
function addAll2(...numbers) {       // ...을 붙이면 함수 내에서 매개변수들을 배열로 묶어줌
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

var result2 = addAll2(10, 20, 60);  // [] 안 써도 됨
console.log(result2);