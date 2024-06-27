/*
인터페이스
오버로딩 가능 : 호출 시그니처를 사용, 함수타입 표현식 사용 불가
타입 별칭과의 차이 - 유니온 인터섹션 타입 불가
*/

interface Person {
    readonly name: String;
    age?: number;
    sayHi(): void;
    sayHi(a: number): void;
}

const person: Person | number = {
    name: "",
    age: 0,
    sayHi: function() {
        
    },
};

