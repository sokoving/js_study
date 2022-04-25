var answer = Math.floor(Math.random()*50)+1;
console.log(answer);

var chance = 5;
var chanceLeft = chance;

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
