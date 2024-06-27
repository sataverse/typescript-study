/*
분산적인 조건부 타입
*/

type StringNumberSwitch<T> = T extends number ? string : number;

// 분산 방지
type StringNumberSwitch2<T> = [T] extends [number] ? string: number;

let varA : StringNumberSwitch<number>;

// 타입 변수에 유니온 타입을 할당하면 두 개가 분리되어 전달
let varB : StringNumberSwitch<number | string>;
let varC : StringNumberSwitch<boolean | number | string>;

// 유니온 타입에 never가 있다면 사라짐 -> 집합
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>