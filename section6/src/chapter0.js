/*
클래스 - 객체의 중복
*/

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메소드
    study() {

    }
}

class StudentDeveloper extends Student {
    skill;
    constructor(name, grade, age, skill) {
        super(name, grade, age);
        this.skill = skill;
    }
    programming() {

    }
}

// 클래스를 이용해 만든 객체는 인스턴스
const s1 = new Student("", "A", 27);

