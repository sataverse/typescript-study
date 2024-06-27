/*
선언 합침 - 동일한 이름의 인터페이스는 합쳐짐
*/

interface Person {
    name: string;
}

interface Person {
    name: string; // 반드시 동일타입 서브타입도 불가
    age: number;
}

const person: Person= {
    name: "",
    age: 27,
};

// 모듈 보강

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib= {
    a: 1,
    b: 2,
    c: "",
}