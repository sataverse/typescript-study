/*
타입 단언(assertion)
-> 실제로 타입을 바꾸는 것이 아님
*/

type Person = {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = "";
person.age = 27;

let person1 = {
    name: "",
    age: 0,
    language: "",
} as Person;

/*
타입 단언의 규칙
값 as 단언
A as B
A가 B의 슈퍼타입이거나 서브타입이어야함
*/

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;
let num4 = 10 as unknown as string;

// const 단언
let num5 = 10 as const;
let cat = {
    name: "옹이",
    color: "yellow",
} as const;
// cat.name = ""

// Non Null 단언 - null undefined가 아니라고 믿게 만들기
type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "",
    author: "",
}

const len: number = post.author!.length;