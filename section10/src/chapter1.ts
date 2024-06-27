/*
Partial<T>
-> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
*/

interface Post {
    title: string;
    tags : string[];
    content: string;
    thumnail?: string;
};

type Partial<T> = {
    [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
    title: "title",
    content: "...",
};

/*
Required<T>
-> 특정 객체 타입의 모든 프로퍼티를 필수 프로터피로 바꿔주는 타입
*/

type Required<T> = {
    [key in keyof T]-?: T[key];
};

const withThumnailPost: Required<Post> = {
    title: "한입 타스 후기",
    tags: ['ts', 'react'],
    content: "",
    thumnail: "1.jpg",
};

/*
Readonly<T>
-> 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
*/

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
    title: "readonly",
    tags: [],
    content: "",
}

// readonlyPost.title = "ll";
