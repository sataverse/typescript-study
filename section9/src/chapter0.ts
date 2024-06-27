/*
조건부 타입
*/

// 서브타입인지 확인
type A = number extends string? string : number;

type ObjA = {
    a: number;
};

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;


// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>

// 결과를 알 수 없기 때문에 타입 단언 필요
// -> 함수 오버로딩

function removeSpaces<T>(text: T) : T extends string ? string : undefined;
function removeSpaces(text: any) {
    if(typeof text === "string") {
        return text.replaceAll(" ", ""); 
    }
    else {
        return undefined;
    }
}

let result = removeSpaces("hi im winterlood");
let result2 = removeSpaces(null);