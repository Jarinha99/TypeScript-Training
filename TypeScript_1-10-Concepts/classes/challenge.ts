// Exercício 1 - Classe
class Motorcicle {
  constructor(public name: string = "", public speed: number = 0) {}

  honk() {
    console.log("Toooooooooot!");
  }

  speedUp(delta: number) {
    this.speed = this.speed + delta;
  }
}

var newMotorcicle = new Motorcicle("Ducati");
newMotorcicle.honk();
console.log(newMotorcicle.speed);
newMotorcicle.speedUp(30);
console.log(newMotorcicle.speed);

// Exercício 2 - Herança
abstract class Object2D {
  constructor(public base: number, public height: number) {}

  abstract area(): number;
}

class Rectangle extends Object2D {
  area() {
    return this.base * this.height;
  }
}

console.log(new Rectangle(5, 7).area());

// Exercício 3 - Getters & Setters
class Intern {
  private _firstName: string = "";

  set firstName(firstName: string) {
    if (firstName.length >= 3) {
      this._firstName = firstName;
    } else {
      this._firstName = "";
    }
  }

  get firstName(): string {
    return this._firstName;
  }
}

let newIntern = new Intern();
console.log(newIntern.firstName);
newIntern.firstName = "Le";
console.log(newIntern.firstName);
newIntern.firstName = "Leonardo";
console.log(newIntern.firstName);
