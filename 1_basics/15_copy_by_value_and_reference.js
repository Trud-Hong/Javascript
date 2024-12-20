/**
 * copy by value 값에 의한 전달
 *  -값을 그대로 전달달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copay by value다.
 *  primitive-object를 제외하고 생성되는 모든 다른 데이터 타입
 * 2) 객체는 copy by reference다
 */

//copy by value 값을 그대로 대입해서 전달한다.
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('-----------------------------');
console.log(original);
console.log(clone);

//copy by reference

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('---------------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};

console.log(originalObj === cloneObj);
//Object 안에 값이 같다고 일치하지 않다.

/**
 * copy by reference는 object가 할당 되어있는 메모리 주소를 가르키는 주소를 가르킨다.(서로 다른 주소임)
 */

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}
//Qz
console.log(yuJin1 === yuJin2);
console.log(yuJin1 === yuJin3);
console.log(yuJin2 === yuJin3);

/**
 * spread Operator
 * Object에서도 존재한다.
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3);

const yuJin5 = {
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7); //Spread Operator는 순서가 중요하다

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);

