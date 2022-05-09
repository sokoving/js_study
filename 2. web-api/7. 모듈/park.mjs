// 박씨의 파일

//박씨도 전역변수를 설정하고
const x = '박영희';

//함수도 선언했다
function hello() {
    console.log('잘 가, 영희야');
}

// 전역변수, 함수를 외부로 내보내기
export {x, hello};