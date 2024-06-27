/*
맵드 타입 - 기존의 객체타입을 기반으로 새로운 객체타입을 만들기
*/

interface User {
    id: number;
    name: string;
    age: number;
}

// 프로퍼티의 키
type PartialUser = {
    [key in keyof User]?: User[key];
}

type BooleanUser = {
    [key in keyof User] : boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]?: User[key];
}

function fetchUser() : ReadonlyUser {
    return {
        id: 1,
        name: "",
        age: 27,
    };
}

function updateUser(user: User) {

}

updateUser(({
    id: 1,
    name: "",
    age: 20,
}));