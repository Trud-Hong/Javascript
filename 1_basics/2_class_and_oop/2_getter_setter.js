/**
 * Getter and Setter
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    get nameAndYear(){ //값을 가져올때 사용
        return `${this.name}-${this.year}`;
    }

    set setName(name){ //set은 반드시 parameter를 하나 가져야한다.
        this.name = name; // this.name은 stter의 name이 아니라 IdolModel의 property의 name이다.
    } //바꾸고 싶은 property와 같은 이름을 사용 //set 값을 새로 저장할 때 사용
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

console.log(yuJin.nameAndYear);

//property를 private으로 만들면 직접 access가 불가능한데 이때 setter를 사용해 값을 바꾼다.


yuJin.setName = '장원영';
console.log(yuJin);

//private 값 = 실제로 값은 저장은 하는데 외부에서 접근을 못하는 값
//getter를 넣어주면 값을 가져올수 있다.
class IdolModel2{
    #name;
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }
    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);
