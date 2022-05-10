//=============== 전역변수, 함수 정의부분 =============//

//1. 버튼 클릭 > ul의 li 추가하는 함수
/* li에 추가할 것
<li data-id="마지막 숫자" class="todo-list-item">
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">인풋에 넣은 값</span>
    </label>
    <div class="modify">
        <span class="lnr lnr-pencil"></span>
    </div>
    <div class="remove">
        <span class="lnr lnr-cross-circle"></span>
    </div>
</li>
</div>
*/
function makeNewTodo() {
    //임시로 넣을 가상 Li
    const $virtualLi = document.createDocumentFragment();

    const $newLi = document.createElement('li');
    $newLi.dataset.id = returnLastDataId()+1;
    $newLi.classList.add('todo-list-item');
    $virtualLi.appendChild($newLi);

    // //마지막 todoUl에 가상 li 넣기
    const $todoUl = document.querySelector('ul.todo-list')
    $todoUl.appendChild($virtualLi);
}

//1-1. 마지막 data-id를 만드는 함수
    function returnLastDataId(){
        const $todoUl = document.querySelector('ul.todo-list')
        return +$todoUl.lastElementChild.dataset.id
    }



/*
 const $newTodoInput = document.getElementById('todo-text');
 $newTodoInput.value
*/

//=============== 메인 코드 실행부분 ===============//
(function(){

//1. 버튼 클릭 > ul의 li 추가
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', makeNewTodo);






})();