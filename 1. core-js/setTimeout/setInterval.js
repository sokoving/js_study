// 공부중
let idx = 0;

function countNum(){
    if(idx < 5){
        console.log(`안녕 ${idx}`);
        idx++;
    } else {
        console.log('끝');
        clearInterval(countNum);
    }
}
setInterval(countNum, 500)
