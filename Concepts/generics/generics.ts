// Exemplo prático da diferença do Generics e do Any
function echoUsingAny(object: any): any {
  return object;
}

console.log(echoUsingAny("Gabriel").length);
console.log(echoUsingAny(27).length); // Undefined
console.log(echoUsingAny({ name: "Gabriel", age: 15 }));

function echoUsingGenerics<T>(object: T): T {
  return object;
}

console.log(echoUsingGenerics("Gabriel").length);
console.log(echoUsingGenerics<number>(27)); // Impede de deixar o length pois ele já detecta que gerara o undefined
console.log(echoUsingGenerics({ name: "Gabriel", age: 15 }).name);

// Array using Generics
const grades: Array<number> = [8, 9.4, 7.5, 4.9];
grades.push(5.4);
// grades.push("5.4");
console.log(grades);

function logArray<T>(args: T[]): void {
  args.forEach((element) => console.log(element));
}

logArray([1, 2, 3]);
logArray<number>([1, 2, 3]);
logArray<string>(["Gabriel", "Fernando"]);
logArray<{ name: string; age: number }>([
  { name: "Gabriel", age: 21 },
  { name: "Fernado", age: 28 },
]);

type genericPerson = {
  name: string;
  age: number;
};

logArray<genericPerson>([
  { name: "Gabriel", age: 21 },
  { name: "Fernado", age: 28 },
]);

// Type - Generic

type Echo = <T>(data: T) => T;
const callEcho: Echo = echoUsingGenerics;
console.log(callEcho<string>("Gabriel"));

// Classes using Generics

abstract class BynaryOperation<params, response> {
  constructor(public operator1: params, public operator2: params) {}

  abstract execute(): response;
}

class BynarySum extends BynaryOperation<number, number> {
  execute() {
    return this.operator1 + this.operator2;
  }
}

console.log(new BynarySum(3, 5).execute());

class DifferenceBetweenDates extends BynaryOperation<Date, string> {
  execute() {
    let daysDifference: number =
      Math.abs(this.operator2.getTime() - this.operator1.getTime()) /
      1000 /
      60 /
      60 /
      24;
    return `${daysDifference} days.`;
  }
}

console.log(
  new DifferenceBetweenDates(
    new Date("01-01-2020"),
    new Date("01-05-2020")
  ).execute()
);

// Row Challenge - Done
// Constraints
class Row<T extends number | string> {
  constructor(public itens: T[]) {}

  join(item: T) {
    this.itens.push(item);
  }
  next() {
    if (this.itens.length > 0 && this.itens[0]) {
      return this.itens.splice(0, 1);
    }

    return null;
  }
  log() {
    console.log(this.itens);
  }
}

let newRow = new Row<string>(["Batata", "Pera"]);
newRow.log();
newRow.join("123");
newRow.log();
console.log(newRow.next());
console.log(newRow.next());
console.log(newRow.next());
console.log(newRow.next());
newRow.log();
let newRow2 = new Row<number>([1, 2]);
// let newRow3 = new Row<boolean>([true, false]);

// Challenge - Map/Dictionary
// Objects Array (Key/Value) -> itens
// Métodos: get(Key), put({ K, V })
// clean(), log()

type mapItem<K, V> = { key: K; value: V };

class MyMap<K, V> {
  constructor(public itens: mapItem<K, V>[] = []) {}

  put(item: mapItem<K, V>) {
    let previousItemInKey = this.itens.findIndex(
      (itemInArray) => itemInArray.key === item.key
    );

    if (previousItemInKey !== -1) {
      this.itens.splice(previousItemInKey, 1);
    }

    this.itens.push(item);
  }

  get(key: K): mapItem<K, V> | undefined {
    return this.itens.find((item) => item.key === key);
  }

  clean() {
    this.itens = new Array<mapItem<K, V>>();
  }

  log() {
    console.log(this.itens);
  }
}

console.log("Start Challenge");
const mapa = new MyMap<number, string>();
mapa.put({ key: 1, value: "Pedro" });
mapa.put({ key: 2, value: "Rebeca" });
mapa.put({ key: 3, value: "Maria" });
mapa.put({ key: 1, value: "Gustavo" });

console.log(mapa.get(2));
mapa.log();
mapa.clean();
mapa.log();
