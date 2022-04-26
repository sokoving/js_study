var answerNum = Math.floor(Math.random()*50)+1;
console.log(answerNum);
while(true){
    var i = +prompt(`1~50 사이의 무작위 숫자를 맞춰보세요!!!`)
    if (i < answerNum) {
        alert('UP!!!!');
    } else if ( i > answerNum) {
        alert('DOWN!!!!');
    } else {
        alert('딩동댕~~~!!');
        break;
    }
    if ( i === 000) {
        alert(`게임을 강제종료합니다.`);
        break;
    }
}
