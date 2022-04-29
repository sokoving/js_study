/*
    n개의 정수를 전달받아 그 중 최소값을
    반환하는 함수 min을 정의하고 

    사용자에게 반복해서 숫자들을 입력받은 후
    min을 호출하여 최소값을 출력하세요.
    입력을 그만둘때는 '그만'이라고 입력하도록
    코드를 작성하세요
*/

function min(numbers) {
    var minNum = numbers[0];
    for (var n of numbers) {
        if (n < minNum) {
            minNum = n;
        }
    }
    return minNum;
}

var nums = [];

while (true) {
    var inputMsg = prompt('숫자를 입력: ');
    if (inputMsg === '그만') break;
    nums.push(+inputMsg);
}

var result = min(nums);
alert(result);s