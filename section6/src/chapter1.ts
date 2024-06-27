/*
타입스크립트의 클래스
*/

// 변수의 타입을 추론할 수 없는 상황 (암시적 any 타입 할당)
class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {

    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

// 살제 타입으로도 사용
const employeeA = new Employee("", 27, "");
const employeeB: Employee = {
    name: "",
    age: 28,
    position: "",
    work() {
        
    },
}