/**
 * array Methods
 * 
 * Methods-OOP를 배울때 class나 object를 clss안에 귀속되는 함수를 methods라 한다
 */

let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
]

console.log(iveMembers);

//push() => 실행하는 array 맨 끝에 iteam을 집어 넣는다.
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

//push는 return값이 있을까? >> 있다
//7이라는 숫자는 push하고나서 ivemember 변수의 길이이다.(새로운 길이)
//반환값을 추가한 다음 길이를 반환 해준다.

console.log('-------------------------');

//pop() >> 마지막 element를 삭제한다. 삭제한 값을 반환한다.
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('------------------------');

//shift() >>첫번째 element를 삭제한다.
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() >> 맨 앞에 element를 생성 push와 비슷하다.
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('------------------------');
//splice() >> 배열 범위 삭제

console.log(iveMembers.splice(0, 3)); //0~3 값을 지우고 그값을들 다시 array로 만들어서 반환
console.log(iveMembers); //splice로 인해 삭제된 배열이 반영


iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
]

console.log(iveMembers);
//새로운 함수를 반환해주는 Methods들

// concat()
/**
 * 언뜻 보면 concat()은 push()와 비슷해 보인다.
 * 그러나 concat()은 완전히 새로운 array를 만들어서 반환한다.
 * 메모리 공간에서 기존 iveMembers에 저장된 메모리와는 다른 새로운 메모리에
 * 코드팩토리를 추가한 배열을 새로 만들어서 반환 따라 원래 iveMembers를 반환하면
 * 바뀌지 않고 기존 array로 나온다.
 */
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

//slice(시작인덱스, 자르고자하는 인덱스+1), splice()와 비슷하지만 array변경하지 않음
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

//spread operator()
//spread operator 는 list 안에 list를 넣는 건데 list를 벗겨 내고 넣는다.
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
  iveMembers,
];
console.log(iveMembers3);

console.log('------------------------');

let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([...iveMembers,] === iveMembers);
/**
 * spread operator 값을 펼쳐 놓으면 완전히 새로운 array가 탄생한다.
 * 메모리 공간이 다르다. 그렇기 때문에
 * 불변 프로그래밍을 할때 spread operator를 많이 사용한다.
 */


//join() >>,를 기준으로 합친다./ 모든값을 string으로 묶을때 많이 사용한다
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

//sort() >> 오름차순으로 정렬할때 사용 원래 array가 변경이 된다.
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse()); //오름차순후 >>reverse로 내림차순

let numbers = [
  1,
  9,
  7,
  5,
  3,
];
console.log(numbers);
//sort를 맘대로 지정하고 싶다 >> 함수를 넣고 2개의 parameter를 입력
//a, b를 비교했을때
//1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
//2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
//3) 원래 순서를 그래도 두려면 0을 반환
//numbers.sort((a, b)=>{});
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});

numbers.sort((a, b)=>{
  return a > b ? -1 : 1;
});

//map()
//array 모든 값을 순회 하면서 변형을 한다.
//map() 함수도 기존의 값을 바꾸지 않고 새로운 array를 반환해준다.
console.log('---------------------------');
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
  if(x === '안유진'){
      return `아이브: ${x}`;
    }else{
        return x;
    }
}));

console.log(iveMembers);

// Element를 찾는 기능
// filter()

numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => true)); //true를 반환 하면 필터하는 새로운 값에 들어간다.
console.log(numbers.filter((x) => false)); //true를 반환 하면 필터하는 새로운 값에 들어간다.
console.log(numbers.filter((x) => x % 2 === 0));

//find() true를 반환 할때 필터하는 해당되는 첫번째 값만 반환한다.
console.log(numbers.find((x) => x % 2 === 0));

//findIndex() >>Index를 반환 >>8의 인덱스는 1
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() 중요
// 첫번째 argument는 함수를 넣는다
// 두번째 argument는 시작하고 싶은 값을 넣는다

console.log(numbers.reduce((p, n) => p + n, 0));

/**
 *     <reduce() 함수의 KeyNote>
 * numbers = [1, 8, 7, 6, 3];
 * numbers.reduce((p, n) => p + n, 0));
 *                 1  2        3
 *                 4  5        6
 *                 7  8        9
 *                10  ...
 * 
 * 1. 초기값인 0이 p에 입력된다.
 * 2.numbers array의 첫번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.
 * 5. array의 두번째 값인 8이 n에 입력된다.
 * 6. p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7. 6에서 반환한 값(9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할때까지 반복한다.
 *    결국 모든 값을 다 더한 25가 반환된다.
 */


//reduce() 퀴즈
//reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
//길이를 더해서 반환하라.
//참고로 string의 길이는 .length를 이용해서 구할 수 잏ㅆ다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0));


