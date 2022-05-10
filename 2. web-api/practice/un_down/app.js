//================== 전역변수, 함수 정의부 =================//
//게임 진행에 필요한 데이터
//(실제 정답, 선택한 숫자, 최솟값, 최댓값)
const gameData = {
    secret: Math.floor((Math.random()*100)+1),
    answer: null,
    min: 1,
    max: 100
};



// 숫자 아이콘 생성 함수
function makeIcons() {

    const $numbers = document.getElementById('numbers');

    // 1. 가상의 태그(최적화)
    const $virtual = document.createDocumentFragment();

    for(let i = 1; i <= 100; i++){
    const $newDiv = document.createElement('div');
    $newDiv.textContent = i;
    $newDiv.classList.add('icon');
    $virtual.appendChild($newDiv);
    }
    $numbers.appendChild($virtual)


    // 2. 아이콘 클릭 이벤트 부여
    $numbers.addEventListener('click', e => {
        
        // 만약에 아이콘을 클릭하지 않았다면 이벤트 x, 나가기
        if (!e.target.matches('#numbers > .icon')) return;

        // 사용자가 선택한 숫자가 무엇인가?
        gameData.answer = +e.target.textContent;
    
    })

}// end makeIcons



//================== 메인 코드 실행부분 =================//
(function(){

    // 1. 100개의 아이콘을 만들어서 배치
    makeIcons();


})();