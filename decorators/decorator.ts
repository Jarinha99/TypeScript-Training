function logClass(constructor: Function) {
  console.log(constructor);
}

type objectToDecoratorExample = {
  a: string;
  b?: number;
};

function decorator(obj: objectToDecoratorExample) {
  return function (_: Function) {
    console.log(obj.a, obj.b);
  };
}

type Constructor = { new (...args: any[]): {} };

function decoratorReturningSubClass(constructor: Constructor) {
  return class extends constructor {
    constructor() {
      console.log("Before");
      super();
      console.log("After");
    }
  };
}

// Setar a interface (com o mesmo nome) para o TS aceitar o proposição do novo metodo.
interface HouseholdAppliances {
  testLog?(): void;
}

@logClass
@decorator({ a: "Banana", b: 25 })
@decoratorReturningSubClass
@logable
class HouseholdAppliances {
  constructor() {
    console.log(`new...`);
  }
}

function logable(constructor: Function) {
  constructor.prototype.testLog = function () {
    console.log(this);
  };
}

const appliance = new HouseholdAppliances();
// Caso o objeto tenha o Decorator Logable, vai ter a função testLog, e assim será logado.
// 1 - é verificado a existência do método 2 - Executa o mesmo.
appliance.testLog && appliance.testLog();

// let houseHold1 = new HouseholdAppliances("MicroWaves");
// let houseHold2 = new HouseholdAppliances("Dishwasher");
// let houseHold3 = new HouseholdAppliances("Toaster");
// let houseHold4 = new HouseholdAppliances("123");

// Challenge Decorator adminProfile - Done
const LoggedUser = {
  name: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: true,
};

type user = {
  name: string;
  email: string;
  admin: boolean;
};

function adminProfile(loggedUser: user) {
  return (_: Function) => {
    if (!loggedUser || !loggedUser.admin) {
      throw new Error("Access Denied");
    }
  };
}

@adminProfile(LoggedUser)
class AdministrativeChange {
  critical() {
    console.log("Something critical has benn changed!!!");
  }
}

new AdministrativeChange().critical();

// Decorator to methods and attributes
function freeze(
  target: any,
  methodName: string,
  descritor: PropertyDescriptor
) {
  console.log(`Freezing: ${methodName}/${target}`);
  descritor.writable = false;
}

function notNegativeValue(target: any, propertyName: string) {
  console.log(`Setting not negative rule: ${propertyName}/${target}`);

  delete target[propertyName];
  Object.defineProperty(target, propertyName, {
    get: function (): any {
      return target["_" + propertyName];
    },

    set: function (valor: number): any {
      if (valor < 0) {
        throw new Error("Saldo inválido");
      }

      target["_" + propertyName] = valor;
    },
  });
}

function paramInf(target: any, MethodName: string, index: number) {
  console.log(`${target}, ${MethodName}, ${index}`);
}

class CurrentAccount {
  @notNegativeValue
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  @freeze
  withdraw(@paramInf value: number): void {
    this.balance -= value;
  }

  @freeze
  getBalance() {
    return this.balance;
  }
}

let ca = new CurrentAccount(10000.0);
ca.withdraw(5000);
console.log(ca.getBalance());

// ca.getBalance = function () {
//   return (this.balance += 15000);
// };

console.log(ca.getBalance()); // 5000
ca.withdraw(5000);
console.log(ca.getBalance()); // 5000
// ca.withdraw(5000); Error
