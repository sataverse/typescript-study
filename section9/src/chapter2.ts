/*
infer : 특정 타입을 추론하는 방법
*/

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<number>; // infer 다음의 R 타입을 추론 불가


type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// T는 프로미스 타입이어야 함
// 프로미스 타입의 결과값 타입 반환

type PromiseA = PromiseUnpack<Promise<number>>;
type NoPromise = PromiseUnpack<string>;

