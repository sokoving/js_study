//=============== 전역변수, 함수 정의부분 =============//

// 할 일 데이터
const todos = [
    {
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];

//새로운 할 일의 아이디를 생성하는 함수
function makeNewId() {
    if(todos.length <= 0){
        return 1;
    } else{
        //기존의 맨 마지막 데이터 아이디 + 1
        return todos[todos.length-1].id + 1;
    }
    // return todos.length > 0 ? todos[todos.length-1].id + 1: 1;
}


// 새로운 할 일을 화면에 렌더링하는 함수
function renderNewTodo(newTodo) { 
    //li 태그 생성
    const $newLi = document.createElement('li')
    $newLi.dataset.id = newTodo.id;
    $newLi.classList.add('todo-list-item')

    //li의 자식 생성
    $newLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${newTodo.text}</span>
        </label>
        <div class="modify">
            <span class="lnr lnr-pencil"></span>
        </div>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>
    `;
    
    const $todoList = document.querySelector('.todo-list');
    $todoList.appendChild($newLi);
}


//할 일 추가 기능 정의
function insertTodo() {
    //1. 할 일 데이터 객체 생성
    const $todoText = document.getElementById('todo-text');
    const newTodo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false,
    };
    // console.log(newTodo);

    //2. 생성한 객체를 배열에 추가
    todos.push(newTodo);

    //3. 화면에 렌더링
    renderNewTodo(newTodo);

    //4. 인풋창 비우기
    $todoText.value = '';

}

//data-id가 주어지면 해당 id와 일치하는 객체의 인덱스를 리턴
function findIndexById(dataId){
    for (let i = 0; i < todos.length; i++){
        if (+dataId === todos[i].id) {
            return i;
        }
    }
    return null; //못 찾았다
}

//할 일 체크시 변화 처리
function changeCheckState($checkbox){
    // 렌더링 CSS 처리
        //타겟이 속해 있는 라벨 찾기
    const $label = $checkbox.parentElement;
    $label.classList.toggle('checked');


    // 데이터 변동 처리
        //타겟의 아이디값
    const dataId = $label.parentElement.dataset.id;

        //타겟의 아이디값을 통해 index를 찾는 함수 호출(재사용)
    const idx = findIndexById(dataId);

    todos[idx].done = !todos[idx].done;
    console.log(todos);
}

// 할 일 삭제 처리 함수
function removeTodo($targetLi){

    // 1. 화면 처리: 삭제버튼이 선택된 li 태그를 uul에서 제거
    const $todoList = document.querySelector('.todo-list');
    $todoList.removeChild($targetLi);

    // 2. 데이터 처리: 배열에서 제거된 li에 매칭되는 객체를 삭제
    const delIndex = findIndexById($targetLi.dataset.id)
    todos.splice(delIndex, 1);
    console.log(todos);
}


// 수정 모드 진입 처리
function enterModifyMode($modifySpan) {
    // 아이콘 변경
    $modifySpan.classList.replace('lnr-pencil', 'lnr-checkmark-circle');

    // 텍스트 부분 span > input[type=text]로 변경
    // input의 class="modify-input"

    // 교체 대상 span.text
    const $textSpan = $modifySpan.parentElement.previousElementSibling.lastElementChild;

    //input 만들기
    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.setAttribute('value', $textSpan.textContent);
    $modInput.classList.add('modify-input');

    // 노드 교체
    $textSpan.parentElement.replaceChild($modInput, $textSpan);
}


// 수정 완료 처리
function endModifyMode($modifySpan){
    // 아이콘 변경 
    $modifySpan.classList.replace('lnr-checkmark-circle', 'lnr-pencil');

    // 교체 대상 input
    const $modInput = $modifySpan.parentElement.previousElementSibling.lastElementChild;

    //span.text 생성
    const $textSpan = document.createElement('span');
    $textSpan.classList.add('text');
    $textSpan.textContent = $modInput.value;

    //노드 교체
    const $label = $modInput.parentElement;
    $label.replaceChild($textSpan, $modInput);

    // 데이터 변동 처리
    const idx = findIndexById($label.parentElement.dataset.id);
    todos[idx].text = $textSpan.textContent;
    console.log(todos);
}


// 할일 추가시 input 성공
function isvalidate(){

    const $todoText = document.getElementById('todo-text');

    // trim(): 문자열의 앞뒤 공백 제거 > 스페이스만 많이 친 것도 거름
    if ($todoText.value.trim() === '') {
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '필수 입력 사항입니다.')
        $todoText.value = '';
        return false;
    } else if ($todoText.value.length > 10){
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '10글자 이내로 완성하세요.')
        $todoText.value = '';
        return false;
    } else {
        $todoText.style.background = '';
        $todoText.setAttribute('placeholder', '할 일을 입력하세요');
        return true;
    }
}



//=============== 메인 코드 실행부분 ===============//
(function(){

    //================= 이벤트 처리 ===============//
    //1. 할 일 추가 (클릭 이벤트 등록)
    const $addbtn = document.getElementById('add');
    $addbtn.addEventListener('click', e => {
        e.preventDefault();
        //할 일 추가 함수
        insertTodo();
    })

    //2. 할 일 완료 (change - 값 변경 이벤트)
    const $todoList = document.querySelector('.todo-list');
    $todoList.addEventListener('change', e => {

        if(!e.target.matches('.checkbox input[type=checkbox]')) return;

        // console.log('할 일 완료');
        //할 일 완료 
        changeCheckState(e.target);
    })

    $todoList.addEventListener('click', e => {
        //3. 할 일 삭제 (클릭 이벤트)
        if(e.target.matches('.remove span')) {
        // console.log('할 일 삭제');
            if(confirm('정말로 삭제할까요?')){
                removeTodo(e.target.parentElement.parentElement);
            }
        } 


        //4. 할 일 수정 모드 진입 (클릭 이벤트)
        else if (e.target.matches('.modify .lnr-pencil')) {
        // console.log('할 일 수정 모드 진입');
        enterModifyMode(e.target);
        // console.log(e.target);
        }


        //5. 할 일 수정 완료(클릭 이벤트) 
        else if (e.target.matches('.modify .lnr-checkmark-circle')){
            console.log('할 일 수정 완료 클릭 이벤트');
            endModifyMode(e.target);
        }
    })






})();