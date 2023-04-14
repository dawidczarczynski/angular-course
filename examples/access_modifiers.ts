class Person {
    public name: string;
    private age: number;
    protected email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old. My email is ${this.email}.`);
    }

    private changeAge(newAge: number) {
        this.age = newAge;
    }

    protected changeEmail(newEmail: string) {
        this.email = newEmail;
    }
}

class Student extends Person {
    private studentId: number;

    constructor(name: string, age: number, email: string, studentId: number) {
        super(name, age, email);
        this.studentId = studentId;
    }

    public getStudentId() {
        console.log(`Student ID: ${this.studentId}`);
    }

    public updateEmail(newEmail: string) {
        this.changeEmail(newEmail);
        console.log(`Email updated to ${this.email}`);
    }
}

const myPerson = new Person("Alice", 30, "alice@example.com");
console.log(myPerson.name); // Output: "Alice"
myPerson.introduce(); // Output: "My name is Alice and I'm 30 years old. My email is alice@example.com."
myPerson.age = 31; // Compilation error: Property 'age' is private and only accessible within class 'Person'.
myPerson.changeAge(31); // Compilation error: Property 'changeAge' is private and only accessible within class 'Person'.
myPerson.email = "new-email@example.com"; // Compilation error: Property 'email' is protected and only accessible within class 'Person' and its subclasses.

const myStudent = new Student("Bob", 20, "bob@example.com", 12345);
myStudent.getStudentId(); // Output: "Student ID: 12345"
myStudent.updateEmail("bob.new-email@example.com"); // Output: "Email updated to bob.new-email@example.com"
myStudent.email = "other-email@example.com"; // Compilation error: Property 'email' is protected and only accessible within class 'Person' and its subclasses.