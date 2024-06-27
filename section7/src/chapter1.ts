// 1

function swap<T1, T2>(a: T1, b: T2) {
    return [b, a];
}
const [a, b] = swap("1", 2);


// 2

/*
function getFirstValue<T>(data: T[]) {
    return data[0];
}
*/
function getFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}
let num = getFirstValue([0, 1, 2]);


// 3 : T의 확장 - 조건 제한
function getLength<T extends { length: number }>(data: T) {
    return data.length;
}
let var1 = getLength("12345");
// let var2 = getLength(4);