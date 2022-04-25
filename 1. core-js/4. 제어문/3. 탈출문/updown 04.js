// 랜덤 정답 생성
var answer = Math.floor(Math.random()*50)+1;
console.log(answer);

// 난이도 설정
while(true){
    var chance = +prompt(`난이도를 설정하세요~~~!\n1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)`);
    if(chance === 1){
        chance = 3;
        alert(`상난이도입니다. 3번 안에 맞춰주세요!!`);
        break;
    } else if(chance === 2){
        chance = 6;
        alert(`중난이도입니다. 6번 안에 맞춰주세요!!`);
        break;
    } else if(chance === 3){
        chance = 10;
        alert(`하난이도입니다. 10번 안에 맞춰주세요!!`);
        break;
    } else if(chance % 9 === 0){
        chance = 1;
        alert(`!!! 돌발 상황 :  난이도 극상 !!!\n기회는 오직 한 번뿐입니다.\n화이팅~~~`);
        break;
    } else {
        alert(`난이도 상(1), 중(2), 하(3) 중에 골라주세요. `);
    }
}

//남은 기회 변수
var chanceLeft = chance;

var up = 1;
var down = 50;

// 게임 시작
while(true){
    // 정답 맞추기 칸 띄우기
    var i = +prompt(`숫자를 입력하세요 : ${up}~${down}`)
    console.log(i);
    chanceLeft--;           // 남은 기회 차감
    var chanceMessage = `${chanceLeft}번의 기회가 남았습니다.`       // 남은 기회 메시지 변수

    //(추가)사용자가 제대로 된 값 입력하게 할 것(추가)

    // up & down
    if (i < answer) {
        up = i;
        alert(`UP!!!!\n${chanceMessage}`);
    } else if ( i > answer) {
        down = i;
        alert(`DOWN!!!!\n${chanceMessage}`);
    } else {
        alert(`딩동댕~~~!!\n${chance-chanceLeft}번만에 맞췄습니다! 굿굿~`);
        break;
    }

    // 남은 기회 
    if (chanceLeft <= 0) {      // === 0 말고 <= 0으로(보안상)
        alert(`기회를 모두 소진했습니다.\n정답: ${answer}\nGAME OVER!!`);
        break;
    }


    // 게임 강종
    if ( i === 000) { 
        alert(`게임을 강제종료합니다.`);
        break;
    }
}
