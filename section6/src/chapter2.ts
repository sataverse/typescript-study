/*
접근 제어자
*/

class Employee {
    // 기본 접근 제어자는 public
    // readonly와 달리 private는 점연사자로 읽을 수 없음. 파생클래스도 접근 불가능
    // protected는 파생클래스 메서드에서는 가능
    private name: string;
    protected age: number;

    // 생성자 매개변수로 접근 제어자를 붙이면 자동으로 필드를 만들어줌
    constructor(name: string, age: number, private position: string) {
        this.name = name;
        this.age = age;
        // this.position = position;
        // 자동 할당 까지
    }

    work() {

    }
}

const employee = new Employee("", 27, "");
// employee.name = "';