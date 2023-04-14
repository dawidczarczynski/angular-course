class Animal {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public speak(): void {
        console.log(`${this.name} is speaking.`);
    }

    protected move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }

    private sleep(): void {
        console.log(`${this.name} is sleeping.`);
    }
}

interface CanFly {
    fly(speed: number): void;
}

class Bird extends Animal implements CanFly {
    public wingspan: number;
    private color: string;

    constructor(name: string, age: number, wingspan: number, color: string) {
        super(name, age);
        this.wingspan = wingspan;
        this.color = color;
    }

    public fly(speed: number): void {
        console.log(`${this.name} is flying at a speed of ${speed} km/h.`);
    }

    public showDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Wingspan: ${this.wingspan}, Color: ${this.color}.`);
    }
}

const bird = new Bird('Eagle', 5, 2.5, 'brown');
bird.speak(); // "Eagle is speaking."
bird.move(10); // "Eagle moved 10 meters."
bird.fly(100); // "Eagle is flying at a speed of 100 km/h."
bird.showDetails(); // "Name: Eagle, Age: 5, Wingspan: 2.5, Color: brown."
