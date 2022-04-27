

//학생 수 입력 받기
var stuNum;     //다음에 또 쓰 변수라 반복문 밖에서 선언
while (true) {
    stuNum = +prompt(`학생 수를 입력해주세요.`);
    if (stuNum >= 1 && stuNum <= 80) {
        break;
    }
    alert('1~80 사이의 숫자를 입력하세요.');
}

alert(`${stuNum}명의 점수를 입력해주세요`);

//학생 점수 배열
var scoreList = [];
//분포 배열
var distributions = [0,0,0,0,0,0,0,0,0,0,0];

var num = 1; //학생번호

//학생들 점수 입력받기
while (scoreList.length < stuNum) {   // scoreList.length 0부터 시작
    var score = +prompt(`${num}번: `);

    //입력점수 검증
    if (score < 0 || score > 100) {
        alert('0 ~ 100점 사이로 입력하세요!');
        continue;
    }
    scoreList.push(score); //범위 안이면 점수 추가, scoreList.length 하나씩 늘어남
    num++;
}                           // scoreList.length가 stuNum이 되면 종료



//분포 배열 완성하기 [0,0,2,1,0,1,0,1,1,2,2]
// scoreList[0] : 23 -> distributions[2]++ -> distributions[23/10]++
// scoreList[1] : 55 -> distributions[5]++ -> distributions[55/10]++
// scoreList[2] : 100 -> distributions[10]++ -> distributions[100/10]++
// scoreList[3] : 100 -> distributions[10]++

for (var i = 0; i < scoreList.length; i++) {
    distributions[parseInt(scoreList[i]/10)]++; //점수를 10으로 나눈 몫 = distributions의 index 번호
}                                               // 해당 점수 구간에 +1
//[0,0,2,1,0,1,0,1,1,2,2]
// console.log(distributions);

var star = '';                                // star에 메시지 쌓기
for (var i=0; i< distributions.length; i++) { //0부터 구간 수만큼 반복할 것
    
    if (i < distributions.length - 1) {       // 0 <= i < 성적 구간 수-1
        star += `${i*10} ~ ${i*10+9} : `;     // 1회차는  0~9 : 
    } else {
        star += `100 : `;                     // 마지막 성적 구간은 100 : 
    }

    for (var j=0; j < distributions[i]; j++) { // 구간의 수만큼 별찍기 반복
        star += '*';
    }

    star += '\n';                               // 구간 마무리로 엔터
}
alert(star);