// 2차원 배열 활용: 우리 반 학생 3명의  4과목 시험 점수(국영수탐)
        // 데이터가 추가돼도 별도의 코드 수정이 필요 없다
var scoreList = [
    [88, 76, 92, 98],
    [65, 70, 58, 99],
    [100, 92, 100, 100],
]

//각 학생의 평균들을 저장할 배열
var averageList = [];

//수학 점수 총점
var mathSum = 0;

//각 개인의 평균점수와 학급평균을 구하고 싶어요.(수학 총점 추가)
for ( var stuScores of scoreList) {             // 2차원 배열(학급)의 1차원 배열(학생) 순회
    // 수학 점수 누적
    mathSum += stuScores[2]

    //개인의 총점을 저장할 변수
    var eachTotal = 0;
    for (var score of stuScores) {
        eachTotal += score;
    }
    //개인 평균
    var eachAvg = eachTotal / stuScores.length;
    averageList.push(eachAvg);
}

//각 학생의 평균 출력, 학급 평균 구하기

//모든 학생의 평균 총합
var stuAveSum = 0;
for (var i = 0; i < averageList.length; i++) {
    stuAveSum += averageList[i];
    console.log(`${i+1}번 학생 평균: ${averageList[i]}점`);    
}

//학급 평균
var classAverage = stuAveSum / scoreList.length;
console.log(`==============================`);
console.log(`우리 학급 평균: ${classAverage}점`);
console.log(`우리 학급 수학 평균: ${Math.floor(mathSum/scoreList.length*10)/10}`);