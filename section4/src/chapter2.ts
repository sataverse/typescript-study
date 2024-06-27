/*
함수 타입 호환성
특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단
1. 반환값의 타입이 호환되는지
2. 매개변수의 타입이 호환되는지
*/

// 반환값의 호환
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

// 매개변수의 호환
// 같은 수의 매개변수
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = value => {};
let d: D = value => {};

// c = d;
d = c;

type Animal = {
    name: String;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {};
let dogFunc = (dog: Dog) => {};

// animalFunc = dogFunc;
dogFunc = animalFunc;

// 다른 수의 매개변수
type E = (a: number, b: number) => void;
type F = (a: number) => void;

let e: E = (a, b) => {};
let f: F = a => {};

e = f;
// f = e;