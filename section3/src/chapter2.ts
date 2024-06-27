// unknown : 모든 타입의 슈퍼 타입
function unknownExam() {
    let a: unknown = 1;
    // let num: number = a;
}

// never : 공집합 - 모든 집합의 부분집합
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    // let never: never = num;
}

// void
function voidExam() {
    function voidFunc(): void {
        console.log('hi');
        return undefined;
    }

    let voidVar: void = undefined;
}

// any : 모든타입의 슈퍼타입으로 위치하기도 하면서 모든타입의 서브타입으로 위치하기도 함. (never 제외)
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
}
