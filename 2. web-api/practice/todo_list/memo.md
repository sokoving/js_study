# 1. 일단 실행부에 이벤트 등록하고 잘 작동되는지부터 체크(콘솔로그 이용)
  2. 필요한 함수 작성

# <form> 내부의 <button>에는 기본값이 submit
 <form action="입력한 정보를 보낼 주소">
 button을 클릭하면 action 주소로 정보를 제출하기 위해 화면이 깜빡임

  1. action="#" >> 보낼 주소를 일단 막기
  2. type="button" >> submit 기능 제거
  3. e.preventDefault(); >> submit 기능 일시 중지

# <label>
   체크박스와 인풋창 어디를 클릭해도 체인지 이벤트 걸리게

# 모든(여러) 라벨 영역(체크박스, 인풋)에 이벤트 등록
 > 부모요소인 ul에 이벤트를 걸어 버블링 이용 

# 모든 삭제 버튼에 이벤트 등록
 > 부모요소인 ul에 이벤트를 걸어 버블링 이용
 ``` 버블링 범위 제한
    $todoList.addEventListener('click', e => {
        if(!e.target.matches('.remove span')) return;
        console.log('할 일 삭제');
```

# 삭제 버튼에서는 삭제, 수정 버튼에서는 수정 한 번에
``` 버블링 범위 나눠주기
        if(e.target.matches('.remove span')) {
        console.log('할 일 삭제');
        } else if (e.target.matches('.modify span')) {
        console.log('할 일 수정 모드 진입');
        }
```

# 할 일 데이터
 1. 객체로 관리
 2. id는 수정되면 안 됨(게시글의 식별자 역할)
  > 위에 게시글이 삭제돼도 새로 만든 게시글 id가 수정되면 안 됨
  > 수정되면 해당 게시글을 링크했을 때 

# 할 일 데이터 렌더링
  호출한 함수에서 호출할 함수에 매개변수로 데이터 주기



#  렌더링 css 처리
1. 지금 내가 체크한 체크박스를 포함하고 있는 label태그를 찾아서
 클래스 checked를 부여해야 합니다.
2. 그러면 이 함수는 지금 클릭한 체크박스가 누구인지 알면
 label을 찾아낼 수 있습니다.
3. 그런데 이 함수는 어디가 클릭되었는지 모릅니다.
 그럼 누가 알까요?

# 데이터 변동 처리
1. 지금 css만 변했지 실제 데이터는 변하지 않았음.
2. todos배열에 있는 변동된 객체를 찾아서 done프로퍼티의 값을
    반대로 바꿔주는 처리가 필요함.
3. 지금 체크한 태그의 정보를 확인해서 실제 배열에서 해당 객체를
  찾아낸 후 done을 수정해야 함.
4. 그러면 어떻게 지금 클릭한 체크박스정보를 가진 객체를 탐색할 수 있을까?
5. id정보를 알면 가능하다.