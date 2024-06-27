// 타입 별칭
type User = {
    id: number;
    name: string;
};

let user: User = {
    id: 1,
    name: "kim",
};

// 인덱스 시그니처
type ContryCodes = {
    [key : string]: string;
    Korea: string;
};

let contryCodes: ContryCodes = {
    Korea: "ko",
    UnitedState: "us",
};
