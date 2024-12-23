//inheritance 상속

/**
 * 상속의 정의
 * 
 * 상속은 객체들 간의 관계를 구축하는 방법이다. 수퍼클래스, 또는 부모 클래스 등의
 * 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 * 
 * 
 * 클래스 >> 빵을 찍어내는 틀
 * 
 * 객첵 >> 실제로 빵틀로 찍어낸 빵 >> 실제 데이터
 * 
 * 부모 클래스(super) >> 자식 클래스(child)
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
// 상속받고자 하는 함수 명 앞에 extends를 넣어준다.
class FemaleIdolModel extends IdolModel {
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

//위 클래스는 똑같은 일반 클래스와 똑같이 사용할 수 있다.
//상속을 받을때 프로퍼티와 생성자도 같이 상속 받는다.
const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.name);

const cf = new IdolModel('코트팩토리', 1992);
console.log(cf);

console.log(cf.name);
// 상속을 하면 상속받은 모든 부모클래스의 프로퍼티를 차일드 클래스가 받을수는 있지만
// 부모 클래스가 자식클래스의 프로퍼티를 받을 수는 없다.

// 인스턴스 확인
console.log(yuJin instanceof IdolModel); //true
//yuJin은 FelmaleIdolModel로 선언을 했지만 IdolModel의 인스턴스가 맞다.
// 상속을 받았기 때문

console.log(yuJin instanceof FemaleIdolModel); //true
console.log(yuJin instanceof MaleIdolModel); //false

console.log('---------------------');

console.log(jiMin instanceof IdolModel); //true
console.log(jiMin instanceof FemaleIdolModel); //false
console.log(jiMin instanceof MaleIdolModel); //true

console.log('---------------------');

console.log(cf instanceof IdolModel); //true
console.log(cf instanceof FemaleIdolModel); //false
console.log(cf instanceof MaleIdolModel); //false
