// 함수 타입 정의

function func(a: number, b: number) : number {
    return a + b;
}

const add = (a: number, b: number) : number => a + b;

// 필수 매개변수가 앞으로
function introduce(name = 'name', age: number, tall?: number) {
    name;
    if(typeof tall === "number") {
        tall + 10;
    }
}

function getSum1(...rest: number[]) {
    rest
}

function getSum2(...rest: [number, number, number]) {
    rest
}

getSum1(1, 2, 3, 4, 5);
getSum2(1, 2, 3);