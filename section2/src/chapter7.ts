// void: 아무것도 없음을 의미
function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}
// 반환값을 undefined로 해놓으면 반드시 return; 또는 return undefined; 필요
// null도 마찬가지

let a: void;
// a = 1;
a = undefined


// never: 반환을 할 수 없음
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}

let n: never;
//n = 1;
//n = undefined;