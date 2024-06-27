// object - 객체 리터럴 타입 (구조적 타입 시스템 : 구조 기준 정의)
let user1: object = {
    id: 1,
    name: "kim",
}

let user2: {
    id?: number;
    name: string;
    readonly key: string;
} = {
    id: 1,
    name: "kim",
    key: "abcde",
};

user2.id;

