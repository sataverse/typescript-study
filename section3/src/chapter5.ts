// 타입 추론 -> 초기값 기준 추론
// 함수의 반환값 타입, 기본값의 매개변수, 구조분해할당된 객체 및 배열도 추론

// 타입 넓히기
let a = 10;

// 암묵적 any 타입의 진화 / 명시적인 any 타입과 다름
let d;
d = 10;
d.toFixed();
d = "hello";
d.toUpperCase();

// 넘버 리터럴 타입 
const num = 10;

let arr = [1, "str"];
// arr.push(true);