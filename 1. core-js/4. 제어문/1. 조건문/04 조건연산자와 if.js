

var money = 5000;
/* 분기가 하나 : 돈이 5천 원 이상이면 김치찌개 아니면 라면 저장 */

                        // if문 사용
var food;
if (money >= 5000){
    food = '김치찌개';
} else {
    food = '라면';
}
console.log(food);


                        // 삼항연산자
var food = money >= 5000 ? '김치찌개' : 라면;
console.log(food);



/* 분기가 둘 : 5천 원 넘으면 '김치찌개', 3천 원 넘으면 '라면', 그 밑이면 '굶음' */

                        //삼항연산자 >> 분기가 적을 때
var food = (money >= 5000)
        ? '김치찌개'
        : (money >= 3000)
        ? '라면' : '굶음';
console.log(food);


                        // if >> 분기가 많을 때
var food;
if (money >= 5000) {
    food = '김치찌개'
} else if  (money >= 3000) {
    food = '라면'
} else {
    food = '굶음'
}

console.log(food);