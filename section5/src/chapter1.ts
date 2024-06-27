/*
인터페이스의 확장
*/

interface Animal {
    name: string;
    age: number;
}

// 재정의 가능 : 원본타입의 서브타입만 가능 -> Animal 타입에 포함되어야 함
// 타입별칭도 확장 가능
interface Dog extends Animal {
    isBark: boolean;
}

interface Cat extends Animal {
    isScartch: boolean;
}

interface DogCat extends Dog, Cat {

}

const dog: Dog = {
    name: "",
    age: 1,
    isBark: true,
}