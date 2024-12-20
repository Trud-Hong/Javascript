let age = 32;

// 명시적

let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); //암묵적인 타입 변환 자바스크립트의 특징임

/**
 * 명시적 변환 몇가지 더 배우기
 */

console.log(typeof (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1' + '1');
console.log('------------------');


/**
 * Boolean 타입으로의 변환
 * console.log(!'') >>string 값은 boolean타입으로 변환을 했을때 ''안에 값이 있냐없냐가 true false를 결정한다.
 */

console.log(!'x');

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 변환한다.
 */
