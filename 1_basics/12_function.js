// 2024. 12. 10.  2: 52 : 14초 끝 코드팩토리https://youtu.be/ZOVG7_41kJE?si=a8-I2P1Iw0kGBOhp
/**
 *  function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate() {
  console.log((2 * 10 / 2 % 3).toString());
}

//calculate();

function calculate(number){
  console.log((number * 10 / 2 % 3).toString());
}

calculate(4);

/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 * 
 * 위의 예시에서
 * 
 * function calculate(Parameter){
 *  console.log((Parameter * 10 / 2 % 3).toString());
 * }
 * calculate(argument);
 */

// 여러개의 Parameter 사용법

function multiply(x, y){
    console.log(x * y);
}

// Defualt Parameter

function multiply(x, y = 10){
  console.log(x * y);

}
multiply(2, 4);
multiply(2);

console.log(multiply(2,4));
console.log(multiply(2));


console.log('----------------');
/**
 * return 받기
 * 반환받기
 * 함수 밖에서 반환을 받아볼수 있는 방법 >> return받기
 */

function multiply(x, y){
  return x * y;
}

const result1 = multiply(3, 4);
/**
 * return 키워드를 통해서 반환해주는 값을
 * 왼쪽에 있는 변수에다가 저장
 */
console.log(result1);


/**
 * Arrow 함수
 * 다르게 선언하는 함수
 * 일반함수와의 차이점은 클래스와 오브젝트를 배운뒤에 이해하자
 */
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
//위와 같다

const multiply4 = x => x * 2;
console.log(multiply4(2));
// Parameter가 1개이면 arrow 함수에 ()도 생략 가능하다.

const multiply5 = x => y => z=> `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

//위와 아래는 같다.
function multiply6(x){
    return function(y){
      return function(z){
          return `x: ${x} y: ${y} z: ${z}`
    }
  }
}

console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5));


//Argument식 키워드
const multiplyThree = function(x, y, z){4
    console.log(arguments);
    return x*y*z;
}
//parameter를 기준으로 봤을때 x = 0번 y = 1번 z = 2번
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a*b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));
//array 함수를 배울때 이해하자

//즉시 실행 함수 immediately invoked function
(function(x, y){
    console.log(x * y)
})(4, 5)


console.log(typeof multiply);
console.log(multiply instanceof Object); // multiply라는 함수가 Objet냐?

//함수는 Object이다.

// 2024. 12. 10.  2: 52 : 14초 끝 코드팩토리https://youtu.be/ZOVG7_41kJE?si=a8-I2P1Iw0kGBOhp

//기본으로 제공되는 함수

// 1.array에 사용하는 함수

