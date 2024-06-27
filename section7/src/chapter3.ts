// 제네릭 인터페이스 : 타입 변수
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1", "2"],
};

// 인덱스 시그니쳐
interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -1231,
    key2: 123123,
}

interface Map<V> {
    [key: string]: V;
}

let booleanMap : Map<boolean> = {
    key: true,
    key2: false,
}

// 제네릭 타입 별칭
type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: "hello",
}

// 제네릭 인터페이스 활용 예시
interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    user.profile
}

const developerUser: User<Developer> = {
    name: "",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
}

const studentUser: User<Student> = {
    name: "",
    profile: {
        type: "student",
        school: "University",
    },
}