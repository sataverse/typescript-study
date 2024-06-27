/*
대수타입
-> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
-> 합집합 타입과 교집합 타입이 존재
*/

// 합집합 타입 - Union
let a: string | number;
a = 1;
a = "hello";
let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
}
type Person = {
    name: string;
    language: string;
}

type Union = Dog | Person;
let union1: Union = {
    name: "",
    color: ""
};
let union2: Union = {
    name: "",
    language: ""
};
let union3: Union = {
    name: "",
    color: "",
    language: ""
};
/*
- Dog타입도 Person타입도 아니게 되버린 경우
let union4: Union = {
    name: "",
}
*/

// 교집합 타입 - Intersection
let b: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
};