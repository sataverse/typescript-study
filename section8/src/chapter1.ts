/*
인덱스드 엑세스 타입: 인덱스를 이용해 다른 타입내의 특정 프로퍼티를 추출
*/

type List = {
    value: number;
}[];

const list: List[number] = {
    value: 2,
}

function pick(value: List[number]["value"]) {

}

type Tup = [number, string, boolean];
type Tup1 = Tup[1];
type TupNum = Tup[number];

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
};

// 인덱스에는 타입만 명시가능 값x / 중첩 대괄호 가능
function printAuthorInfo(author: Post["author"]) {
    author.name;
    author.id;
}

const post: Post = {
    title: "title",
    content: "content",
    author: {
        id: 1,
        name: "name",
    },
};