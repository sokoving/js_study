# main.css

 body: 전체 영역
.wrapper: 콘텐츠가 있는 모든 영역

## overflow
overflow: hidden; 넘친 부분 깍아내기
overflow: auto; 넘치면 스크롤 자동
overflow: scroll; 무조건 스크롤

## .icon 정렬하기
    display: flex;
    flex-wrap: wrap;
}

## 텍스트 정중앙 정렬
display: flex;
justify-content: center;
align-items: center;

## 콘텐츠 이동
 position으로 이동 : 영원히 자리 이동(돌아오지 않음)
 translate로 이동 : 왔다갔다 이동

## icon들은 js로 구현하지만 일단 CSS를 위해 채워넣고 시작했따.

----------------------------------------
# app.js
1. 전역변수, 함수 정의부와
메인 코드 실행 부분 나누기

2. 파일이 크다면 전역변수, 함수정의부도 모듈로 분리

3. 메인코드 실행 부분은
(function(){})();로 즉시실행함수 안에서 진행

5. 숫자 아이콘 만들기
 : 1개씩 100번 구현(X) 100개를 1번 구현(O)
  - 아이콘 하나씩 만들 때마다 화면에 구현하면 부하가 심하게 걸릴 수도 있다.
  - 때문에 아이콘을 하나씩 만들 때마다
  가상의 태그($virtual)에 일단 넣어두고
  아이콘 100개가 들어 있는 하나의 가상의 태그를
  한 번 화면에 구현하기.