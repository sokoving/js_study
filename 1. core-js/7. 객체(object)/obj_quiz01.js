/*
Q1. 아래 문제를 각각 풀어보세요.
1. 빈 객체 user를 만듭니다.
2. user에 키가 name, 값이 John인 프로퍼티를 동적 추가하세요.
3. user에 키가 surname, 값이 Smith인 프로퍼티를 동적 추가하세요.
4. name의 값을 Pete로 수정해보세요.
5. user에서 프로퍼티 name을 삭제하세요.
*/

var user = {};

if (!('name' in user)) {      // user에 name 키가 있는지 확인 후 없으면 추가
  user.name = 'John';
}

user.surname = 'Smith';

if ('name' in user){      // user name 키가 있으면 name을 pete로 수정하라
  user.name = 'Pete';
}
delete user.name;

console.log(user);

console.log(`==============================`);

/*
Q2. 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.
var salaries = {
  kim: 1000000,
  park: 1600000,
  lee: 1300000
}
- 모든 팀원의 월급을 합한 값을 구하고, 
  그 값을 변수 total에 저장해주는 코드를 작성해보세요. 
  total엔 3900000이 저장되어야겠죠?
*/

var salaries = {
  kim: 1000000,
  park: 1600000,
  lee: 1300000
}

var total = 0;

for (var prop in salaries) {
  total += salaries[prop];    // prop의 타입은 string >> salaries.prop은 안 됨
}

console.log(total);