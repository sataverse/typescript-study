/*
제네릭
*/

// 제네릭 함수 : 함수의 인수에 따라 반환값의 타입을 가변적으로
// T - 타입변수
function func<T>(value: T): T {
    return value;
}

let num = func(10);
let arr1 = func([1, 2, 3] as [number, number, number]);
let arr2 = func(<[number, number, number]>([1, 2, 3]));