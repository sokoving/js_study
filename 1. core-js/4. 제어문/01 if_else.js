
var score = 70; //시험 점수

if (score >= 60) {      // ()안에 true, false가 나올 수 있는 조건문. 
    console.log('시험에 합격했어요! 축하드립니다~'); // 위 조건문이 참이면 출력
    console.log('오늘도 행복하세요~'); // 위 if 조건문이 참이면 같이 출력
}
else {  // if의 종속 코드(단독 사용 X).  
    console.log('시험에 불합격했습니다.'); // if의 조건문이 거짓일 경우 실행
    console.log('다음에는 잘될 거에요.'); // if의 조건문이 거짓일 경우 같이 실행
}

console.log('수고 많으셨습니다~'); //if와 상관없이 무조건 실행