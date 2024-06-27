// 배열
let numArr1: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 33];

// 다양한 타입
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플: 길이와 타입이 고정된 배열
let tuple1: [number, number] = [1, 2];
let tuple2: [number, string] = [1, "2"];
const users: [string, number][] = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
]