/*
함수 오버로딩
-> 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
*/

// 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number) {
    if(typeof b === "number") {
        a + b;
    } else {
        a;
    }
}

// func();
func(1);
func(1, 2);