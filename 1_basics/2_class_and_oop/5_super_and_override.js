/**
 * Super and Override
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
// FelMaleIdolModel 안에 특수 프로퍼티 part가 있다고 가정한다. //노래 /춤
// FelMaleIdolModel을 인스턴스화 할때는 constructor에다 name year 에다 part 도 넣고 싶을때
// constructor를 다시 정의하면 된다다
class FelmaleIdolModel extends IdolModel{

    part;

    constructor(name, year, part){
        super(name, year); //super는 this.name = name과 this.year = year를 포함하는 부모클래스
        this.part = part;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다`
    }
}

const yuJin = new FelmaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

// 상속을 받으면 생성자 또한 상속을 받게 되는데 만약에 생성자를 오버라이드 덮어쓰고 싶으면
// 따로 생성자를 만들어주면 된다.
// 기존 생성자를 쓰고 싶으면 super키워드를 사용하면 된다.