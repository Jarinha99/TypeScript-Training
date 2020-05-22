interface Human {
  name: string;

  // Optional attribute
  age?: number;

  // Aceitar um atributo que não sabe o nome que vira, nem o tipo que será
  [prop: string]: any;

  salute(lastName: string): void;
}

function salute(person: Human): void {
  console.log(`Hello ${person.name}`);
}

function changeName(person: Human, newName: string): void {
  person.name = newName;
}

const person: Human = {
  name: "João",
  age: 27,

  salute(lastName: string) {
    console.log(`Hello ${this.name} ${lastName}`);
  },
};

person.salute("Skywalker");
changeName(person, "Joanna");
person.salute("Skywalker");
// salute({ name: "Gabriel", age: 25, justAnotherUnkownAttritute: true });

// Using with Classes
class Client implements Human {
  name: string = "";
  age: number = 21;
  lastBuy: Date = new Date();

  salute(lastName: string) {
    console.log(`Hello ${this.name} ${lastName}`);
  }
}

let newClient = new Client();
newClient.salute("Solo");
salute(newClient);
console.log(newClient.lastBuy);

// Interface to a Function

interface calculateFunction {
  (a: number, b: number): number;
}

let power: calculateFunction;

power = (base: number, exp: number): number => base ** exp;

console.log(power(2, 8));
console.log(power(3, 10));

// Heritage using Interface
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  a(): void;
  b(): void;
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

let test = (b: B) => {};
test(new RealABC());

abstract class abstractClassABD implements A, B {
  a(): void {}
  b(): void {}

  abstract d(): void;
}

// Aplicação interessante da interface para permitir um novo método no Object

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 1;
const y = 1;
const z = 1;

x.log();
y.log();
z.log();

const cli = {
  name: "Gabriel",
  toString(): string {
    return this.name;
  },
};

cli.log();
