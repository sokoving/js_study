/*
    n개의 정수를 전달받아 그 중 최소값을
    반환하는 함수 min을 정의하고 

    사용자에게 반복해서 숫자들을 입력받은 후
    min을 호출하여 최소값을 출력하세요.
    입력을 그만둘때는 '그만'이라고 입력하도록
    코드를 작성하세요
*/

//=================================== 정의부
//numbers 배열 중 가장 작은 값 반환

function min(numbers) {

    var minNum = numbers[0];

    for ( var i of numbers){
        if (minNum <= i) {
            continue;
        } else {
            minNum = i;
        }
    } //end for

    return minNum;
} // end function min 



//=================================== 실행부

var userNums = [];

while (true) {
    
    var userNum = prompt(`${n}번째 수를 입력하세요: `);

    if (userNum === '그만') {
        alert(`가장 작은 수는 ${min(userNums)}입니다.`)
        break;
    } else {
        userNums.push(Number(userNum));
        n++;
    }
}

