var decimal = 100; //숫자 타입 변수

// typeof 연산자: 변수에 저장된 값의 타입을 알려줌
console.log(typeof decimal); //number

var float = 3.14; //실수 타입 === 숫자 타입
console.log(typeof float); //number

// js는 모든 숫자데이터를 실수값으로 처리(C나 JAVA에서는 정수, 실수 구분)
console.log(10/4);   //2.5               //  > console.log(10.0/4.0); 이렇게 해야 실수값 나옴

var binary = 0b1001;    //숫자 앞 0b > 2진수값 저장
console.log(binary);    //9

// NaN(Not a Numbeer): 산술 연산 불가능을 표현하는 값
console.log(10/'메롱');  //NaN