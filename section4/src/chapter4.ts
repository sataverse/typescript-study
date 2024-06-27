/*
사용자 정의 타입가드
*/

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

// 함수가 참이면 Dog타입 이라는 뜻
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if(isDog(animal)) {
        animal
    }
    else if(isCat(animal)) {
        animal
    }
}