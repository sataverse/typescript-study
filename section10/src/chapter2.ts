/*
Pick<T, K>
-> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
*/

interface Post {
    title: string;
    tags : string[];
    content: string;
    thumnail?: string;
};

// K의 제한이 필요 => T로 들어오는 객체 타입의 키값들을 추출한 유니온 타입의 서브타입만
type Pick<T, K extends keyof T> = {
    [key in K] : T[key];
}

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "old",
    content: "old",
}

/*
Omit<T, K>
-> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
*/

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title'|'content'|'tags'|'thumnail', 'title'>>
// Pick<Post, 'content'|'tags'|'thumnail'>

const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumnail: "",
}

/*
Record<K, V>
*/

type ThumnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
}

type Record<K extends keyof any, V> = {
    [key in K]: V;
}

type Thumnail = Record<'large' | 'medium' | 'small', { url: string; szie: number }>;
