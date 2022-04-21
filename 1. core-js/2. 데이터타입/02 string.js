
var greeting;
greeting = 'hello';         //홑따옴표
greeting = "안녕하세요";     //곁따옴표
greeting = `콘니치와`       //백틱

console.log(typeof greeting);  //string

var str1 = '그는 나에게 "메롱"이라고 하고 도망갔다.';
console.log(str1);

var str2 = `Let's Go!`;
console.log(str2);

var str3 = `Let's Go! \"together\"`;

// 경로 표시 : 리눅스 - /, 윈도우 - \
var str4 = 'E:\\temp\\new.png';
console.log(str4);

var str5 = '멍멍이\n\n\n';
console.log(str5);

var str6 = '멍멍이\t\t\t야옹이';
console.log(str6);

var ex1 = '100'  //str

var ex2 = '\n'  //탈출문자는 문자열


// 템플릿 리터럴 (ES6+ 문법)
// ``(백틱)으로 문단 단위의 문자열 처리
// 변수와 문자열 결합을 간편하게 처리할 수 있다(`${변수}`)
var template = `
<ul>
    <li>
        <a href="#">Home</a>
    </li>
</ul>`;
console.log(template);

//학생 이름과 영어 점수를 같이 출력하고 싶은데 학생이 여러 명일 경우
var studentName = '김철수';
var engScore = 88;

console.log(studentName + ' 님의 영어점수는 ' + engScore + '점입니다. ');
// 템플릿 리터럴을 쓰는 경우 : 백틱과 ${변수}를 쓴다
console.log(`${studentName} 님의 영어점수는 ${engScore}점입니다.`);