class Product {
  public name: string;
  price: number;
  inStock: boolean;

  constructor(
    name: string = "Default name",
    price: number = 1,
    inStock: boolean = true
  ) {
    (this.name = name), (this.price = price), (this.inStock = inStock);
  }
}

let newProduct = new Product("Iphone X", 4000, true);
console.log(newProduct);
console.log(newProduct.price); // publico por padrão

let newProduct2 = new Product(); // Omitir () é permitido.
console.log(newProduct2);

class SmartProduct {
  constructor(
    public name: string = "Default name",
    public price: number = 1,
    public inStock: boolean = true
  ) {}
}

let newSmartProduct = new Product("Iphone Y", 3000, false);
console.log(newSmartProduct);
console.log(newSmartProduct.price);

let newSmartProduct2 = new Product(); // Omitir () é permitido.
console.log(newSmartProduct2);

// Challenge 1 - Done
// Challenge 2 - Done

class ChallengeProduct {
  constructor(
    public name: string,
    public price: number,
    public descount: number = 0
  ) {}

  public toString(): string {
    return `${this.name} costs ${this.price} (${
      this.descount
    }% off), final price ${this.getFinalPrice()}`;
  }

  private getFinalPrice(): number {
    return this.price - this.price * (this.descount / 100);
  }
}

let newchallengeProduct = new ChallengeProduct("Motorola G6 Plus", 2000);
console.log(newchallengeProduct.toString());
let newchallengeProduct2 = new ChallengeProduct("Motorola G7 Plus", 2400, 50);
console.log(newchallengeProduct2.toString());

// More of Private Methods

class Car {
  private speedNow: number = 0;

  constructor(
    public brand: string,
    public model: string,
    public maxSpeed: number = 200
  ) {}

  protected alterSpeed(delta: number): number {
    if (this.speedNow + delta > this.maxSpeed || this.speedNow + delta < 0) {
      if (delta < 0) {
        return (this.speedNow = 0);
      }

      return (this.speedNow = this.maxSpeed);
    }

    return (this.speedNow += delta);
  }

  public Acelerate(): number {
    return this.alterSpeed(5);
  }

  public Brake(): number {
    return this.alterSpeed(-5);
  }
}

let car = new Car("Lamborghini", "Murciélago", 342);

// Alternative way to test a lot of uses of a Method
Array(500)
  .fill(0)
  .forEach(() => {
    car.Acelerate();
  });
console.log(car.Acelerate());
Array(500)
  .fill(0)
  .forEach(() => {
    car.Brake();
  });
console.log(car.Brake());

// Heritage
class Ferari extends Car {
  constructor(model: string, maxSpeed: number = 200) {
    super("Ferrari", model, maxSpeed);
  }

  public Acelerate(): number {
    return this.alterSpeed(20);
  }

  public Brake(): number {
    return this.alterSpeed(-15);
  }
}

let ferrari = new Ferari("f40", 500);
console.log(ferrari.Acelerate());
console.log(ferrari.Acelerate());
console.log(ferrari.Acelerate());
console.log(ferrari.Brake());
console.log(ferrari.Brake());

// Getters and Setters
class TestPerson {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    if (age >= 0 && age <= 120) {
      this._age = age;
    }
  }
}

const person1 = new TestPerson();
console.log(person1.age);
person1.age = 15;
console.log(person1.age);
person1.age = -15;
console.log(person1.age);

// Static Methods and Attributes

class MyMathClass {
  static PI = 3.14;

  static circleArea(radius: number): number {
    return MyMathClass.PI * (radius * radius);
  }
}

console.log(MyMathClass.PI);
console.log(MyMathClass.circleArea(3));

// Abstract Class
abstract class Person {
  constructor(public name: string, public age: number) {}

  salute(): string {
    return `Hello ${this.name}`;
  }
}

class NaturalPerson extends Person {
  constructor(
    public name: string = "Gabriel",
    public age: number = 21,
    public cpf: string = "123123123123" // Brazilian NaturalPerson IdentityCode
  ) {
    super(name, age);
  }
}

class LegalPerson extends Person {
  constructor(
    public name: string = "Gabriel Corporation",
    public age: number = 2,
    public cnpj: string = "1231279379178" // Brazilian LegalPerson IdentityCode
  ) {
    super(name, age);
  }
}

console.log(new LegalPerson().salute());
console.log(new NaturalPerson().salute());

// Singleton

class Unique {
  private static instance: Unique = new Unique();
  private constructor() {}

  static getInstance() {
    return Unique.instance;
  }

  now() {
    return new Date();
  }
}

// const wrong = new Unique()
const correct = Unique.getInstance().now();
console.log(correct);

// ReadOnly

class Airplane {
  public readonly model: string;

  constructor(model: string, public readonly prefix: string) {
    this.model = model;
  }
}

const newAirPlane = new Airplane("25", "Mig");
// newAirPlane.model = 'A'
// newAirPlane.prefix = 'ABV'
console.log(newAirPlane);
