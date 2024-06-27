// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
// num2 = num1;

/* 
객체 타입간의 호환성 -> 어떤 객체타입을 다른 객체타입으러 취급해도 괜찮은가?
프로퍼티에 따라 다름. 구조적 타입 시스템을 따르면 조건이 더 적은 타입이 슈퍼타입
*/

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "개",
    color: "brown",
    breed: "진도",
};

let puppy: Animal = dog;

animal = dog;
// dog = animal;

