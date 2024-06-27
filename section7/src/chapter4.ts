/*
제네릭 클래스 - 생성자에 따라 추론
*/

class List<T> {
    constructor(private list: T[]) {}
    push(data: T) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);