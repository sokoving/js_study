/*
#index of를 for문을 사용해 구현해보기

    n개의 정수와 탐색할 정수를 전달받아 
    탐색할 정수가 n개 중에 있다면 
    몇번째에 있는지 반환하고
    없다면 -1을 반환하는 함수 search()를
    작성하고 아래 그림과 같이 출력하세요.

실행 예 1)
vx[0] : 83 ←
vx[1] : 49 ←
vx[2] : 77 ←
vx[3] : 49 ←
vx[4] : 25 ←

찾을 값 : 49
49은(는) 4번째에 있습니다.

실행 예 2)
vx[0] : 83 ←
vx[1] : 49 ←
vx[2] : 77 ←
vx[3] : 49 ←
vx[4] : 25 ←

찾을 값 : 1
탐색에 실패했습니다.

*/

//찾기 함수 정의
function search2(arr, targetNum) {
    return arr.indexOf(targetNum);
  }
  
  var numbers = [83, 49, 77, 49, 25];
  
  var searchNum = 49;
  
  // 찾는 숫자와 배열 숫자 일치 > 기록
  for ( var n = 0; n < numbers.length; n++){
    console.log(`${n} : ${numbers[n]}`);
  
    if (searchNum === numbers[n]) {
      var searchNumIndex = n;
    }
  
  }

  console.log(`${searchNum}은(는) ${searchNumIndex+1}번째에 있습니다.`);