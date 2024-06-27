/*
타입 좁히기
-> 조건문 등을 이용해 넓은타입에서 좁은타입으로 타입을 상황에 따라 좁힘
특정 조건문 내부에서 더 좁은 타입임을 보장할 수 있을때는 더 좁은 타입으로 자동추론
타입 가드라고 부름
*/

type Person = {
    name: string;
    age: number;
}

function func(value: number | string | Date | null | Person) {
    value;
    // value.toUpperCase();
    if(typeof value === "number") {
        console.log(value.toFixed());
    }
    else if(typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if(value instanceof Date) {
        console.log(value.getTime());
    }
    else if(value && 'age' in value) {
        // 클래스가 아님
    }
    else if(typeof value === "object") {
        //console.log(value.getTime());
    }
}