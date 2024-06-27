/*
인터페이스와 클래스
*/

// 클래스의 설계도 역할
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    // 인터페이스는 public 필드만 정의
    constructor(public name: string, public moveSpeed: number) {}
    move(): void {

    }
}