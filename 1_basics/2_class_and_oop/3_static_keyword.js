/**
 * Static Keyword
 * 
 * 지금까지 정의했던 모든 프로퍼티들은
 * 인스터스(객체)에 직접적으로 귀속이 됐었는는데
 * 클래스에 귀속이 되도록 할 수 있다.
 */

// class IdolModel{
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
    
//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

//어디다 어떻게 사용하는데??

/**
 * factory constructor
 * 단순히 하나의 constructor형태로 인스턴스를 반환받는게 아닌
 * 미리 어떤 데이터를 입력 받아가지고 인스턴스를 만들지
 * 템플릿화 해서 정의할 수 있다는 장점이 있다.
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){ //object로부터 클래스의 인스턴스를 만들겠다는 표현
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung);
