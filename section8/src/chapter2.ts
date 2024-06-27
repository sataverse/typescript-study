/*
keyof 연산자 - 객체타입에 사용 : 객체로 부터 모든 프로퍼티의 키를 유니온 타입으로 추출
*/

/*
interface Person {
    name: string;
    age: number;
}
*/

type Person = typeof person;

// key: keyof typeof person
function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person = {
    name: "",
    age: 27,
};

getPropertyKey(person, 'name');