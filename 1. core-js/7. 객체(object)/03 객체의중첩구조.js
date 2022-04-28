
console.log(`==========객체의 중첩구조===========`);

// 예시: 웹사이트 게시판 데이터  >> 여기서 원하는 데이터를 불러올 수 있어야 함.
var board = {
    totalCount: 2578, //총 게시물 수
    admin: 'abc1234',  //관리자 아이디
    page: 258, //페이지 수
    currentPage: 3, //현재 위치한 페이지
    prev: false,   // 이전버튼 활성화 여부
    next: true,     //다음버튼 활성화 여부
    articleList: [ //게시물 목록
        {
            bno: 792, //글번호
            title: '제 3회 빅데이터 분석...', //글제목
            viewCount: 62836, //조회수
            regDate: '2021.10.22', //등록일
            content: '어쩌고 저쩌고... ', //글내용
            writer: '관리자', //등록회원이름
            recommend: 10, //추천수
        }, 
        {
            bno: 791, //글번호
            title: '제출 서류 및 일정', //글제목
            viewCount: 114186, //조회수
            regDate: '2021.10.13', //등록일
            content: '어쩌고 저쩌고123... ', //글내용
            writer: '관리자', //등록회원이름
            recommend: 21, //추천수
        }, 
        {
            bno: 790, //글번호
            title: '고사장 추가 안내', //글제목
            viewCount: 3691, //조회수
            regDate: '2021.10.13', //등록일
            content: '어쩌고 저쩌고456... ', //글내용
            writer: '관리자', //등록회원이름
            recommend: 2, //추천수
        }
    ],
};

console.log(`======중첩구조의 객체에서 원하는 값 찾기 =====`);

// 이전버튼 활성화 여부글
console.log(board.prev);

// 게시물 목록 안의 게시물 개수
console.log(board.articleList.length);

// 두번째 게시물의 전체 정보
console.log(board.articleList[1]);

// 첫번재 게시물의 글제목
console.log(board.articleList[0].title);

// 모든 게시물의 조회수 전부 출력
console.log(`=======================`);
for(var article of board.articleList){      //article의 타입은 객체
    console.log(article.viewCount);
}