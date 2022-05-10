//================== 전역변수, 함수 정의부 =================//
// 숫자 아이콘 생성 함수
function makeIcons() {

    const $numbers = document.getElementById('numbers');

    // 가상의 태그(최적화)
    const $virtual = document.createDocumentFragment();

    for(let i = 1; i <= 100; i++){
    const $newDiv = document.createElement('div');
    $newDiv.textContent = i;
    $newDiv.classList.add('icon');
    $virtual.appendChild($newDiv);
    }
    $numbers.appendChild($virtual)
}



//================== 메인 코드 실행부분 =================//
(function(){

    // 1. 100개의 아이콘을 만들어서 배치
    makeIcons();


})();