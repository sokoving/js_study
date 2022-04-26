var answer = Math.floor(Math.random()*50)+1;
console.log(answer);

// 난이도 설정
while(true){
    var chance = +prompt(`난이도를 설정하세요~~~!\n1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)`);
    if(chance === 1){
        chance = 3;
        break;
    } else if(chance === 2){
        chance = 6;
        break;
    } else if(chance === 3){
        chance = 10;
        break;
    } else if(chance === 99){
        chance = 1;
        alert(`!!! 난이도 극상 !!!\n기회는 오직 한 번뿐입니다.\n화이팅~~~`)
        break;
    } else {
        alert(`난이도 상(1), 중(2), 하(3) 중에 골라주세요. `)
    }
}

//남은 기회 변수
var chanceLeft = chance;

// 게임 시작
while(true){
    var i = +prompt(`1~50 사이의 무작위 숫자를 ${chanceLeft}번 안에 맞춰보세요!!!`)
    chanceLeft--;
    var chanceMessage = `기회가 ${chanceLeft}번 남았습니다.`

    if (i < answer) {
        alert(`UP!!!!\n${chanceMessage}`);
    } else if ( i > answer) {
        alert(`DOWN!!!!\n${chanceMessage}`);
    } else {
        alert(`딩동댕~~~!!\n${chance-chanceLeft}번만에 맞췄습니다! 굿굿~`);
        break;
    }

// 남은 기회 
    if (chanceLeft === 0) {
        alert(`기회를 모두 소진했습니다. GAME OVER!!`);
        break;
    }


// 게임 강종
    if ( i === 000) { 
        alert(`게임을 강제종료합니다.`);
        break;
    }
}
