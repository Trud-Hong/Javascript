/**
 * 클래스의 정의
 * 
 * 클래스는 객체지향 프로그래밍에서
 * 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를
 * 정의하는 일종의 틀이다.
 * 
 * 정보를 일반화해서 정리하는 방법이다.
 * 
 */

/**
 * Class Keyword
 * 선언시 Class 첫글자 대문자로 시작해야한다.
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;  //this는 현재 인스턴스를 가르킨다.
        this.year = year;               
    }
      sayName(){
        return `안녕하세요. ${this.name}입니다.`;
}
}
// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003); //새로운 인스턴스를 생성하고 싶다면 이런 방식으로
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

console.log(yuJin.name);
console.log(yuJin.year);

/**
 * 메소드를 정의하는 법
 * 클래스 안에 함수를 정의를 하면 메소드라고 명명한다.
 */

//클래스에서 함수를 정의할때 ()표시를 하면 된다.

console.log(yuJin.sayName());

console.log(typeof IdolModel);
console.log(typeof yuJin);
// 클래스는 함수이다(함수로 인식됨)
// 클래스로 생성한 인스턴스는 객체다.