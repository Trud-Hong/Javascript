/**
 * Object / 객체  //자바스크립트에서 제일 중요할수 있다.
 */

//key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
        return `${this.name}이 춤을 춥니다.`; //Object 안에 함수를 추가하면 Methods라고 한다.
    }
};
//객체지향이 되는 언어는 this라는 키워드가 존재한다.
//자바스크립트에서는 this가 함수가 정의 되어있는 객체를 가르킨다.
//Ex) this.name === yuJin.name

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);


const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

//객체를 선언할때 변수를 사용하는 방법
//[] 대괄호를 사용한다.

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
      [nameKey]: nameValue,
      [groupKey]: groupValue,
      dance: function(){
          return `${this.name}이 춤을춥니다.`;
      }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리'; // Value값을 변경
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin'; // 존재하지 않는 key를 넣으면 새로운 property가 생성된다.
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * const 키워드를 쓰면 해당 변수를 변경할수 없는데 어째서 값이 변경이 되는가?
 * 해답 : copy by value와 copy by reference를 배울때 알아보자
 * 
 * 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 property나 Methods는 변경 할 수 있다.
 */

const wonYoung = {
    name : '장원영',
    group: '아이브',
}
console.log(wonYoung);

//wonYoung = {}; //Error의 의유 : const는 값을 한번 초기화 하면 바꿀 수 없다.

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키값 다 가저오기
 */

console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung));

//조금더 빠르게 객체를 선언하는 방법
const name = '안유진';

const yuJin3 = {
    name: name, //name, 과 값은 값이다.
    // ,을 넣지 않으면 키가 스트링에 해당되는 값이 들어가고 value에는 name에 해당하는 변수의 값이 입력된다.
}
console.log(yuJin3);

// 2024/12/12

