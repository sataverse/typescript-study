// any: 특정 변수의 타입을 확실히 모를때 사용
let anyVar: any = 10;
anyVar = "abc";
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown: 연산 허용x
let unknownVar: unknown;
unknownVar = "abc";
unknownVar = 1;

// unknownVar.toUpperCase();
// num = unknownVar;