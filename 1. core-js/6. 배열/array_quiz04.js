/*
---학생 수 입력
학생 수를 입력해 주세요 [prompt]
---
1~80 사이로 입력해 주세요

---학생별 점수 입력
0~100점 사이로 입력하세요
---
1번 : 
2번 : 
3번 : 
4번 : 
5번 : 
--
~~분포 그래프~~
0~ 9 : 
10~19 : *
20~29 : **
*/


//학생 수 입력받기
while(true) {
    var studentNum = +prompt(`학생 수를 입력해 주세요`);

    if(studentNum < 1 || studentNum > 80) {
        alert(`1~80 사이의 숫자를 입력하세요!`);
    } else {
        alert(`${studentNum}명의 점수를 입력해 주세요.`);
        break;
    }
}

//학생 점수 빈 배열
var studentsScore = [];

//배열에 점수 요소 추가
var idx = 0
while(idx < studentNum){
    var score = +prompt(`${idx+1}번: `)
    if(score < 0 || score > 100){
        alert(`0 ~ 100점 사이로 입력하세요!`)
    } else {
        studentsScore.push(score);
        idx++
    }
}

// 점수구간 빈 배열과 자리 10개 만들기
var graphs = [];

for ( var x = 0; x < 11; x++){
    graphs.push(0);
}

// studentsScore 전체 순회
for ( var z = 0; z < studentsScore.length; z++){
    //graphs 전체 순회
    for ( var y = 0; y < graphs.length; y++){ 
        if (parseInt(studentsScore[z] / 10) === y){
            graphs[y]++;
    }
    }
}

//별 찍기 추가
