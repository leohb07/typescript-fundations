// 1 - fields in class
class People {
  name!: string; // `!` to tells typescript that we will use this props later
  age!: number;
}

const man = new People();
man.name = "Leonardo";
man.age = 23;

console.log(man);

// 2 - constructor
class NewUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const human = new NewUser("Leonardo", 23);

// 3 - readonly field
class Car {
  name: string;
  readonly wheels: number = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const chevrolet: Car = new Car("Cruze");
console.log(chevrolet.name);

console.log(chevrolet.wheels);

// 4 - inheritance and super
class Animal {
  type: string;
  weight: number;

  constructor(type: string, weight: number) {
    this.type = type;
    this.weight = weight;
  }
}

class Dog extends Animal {
  color: string;

  constructor(color: string, weight: number) {
    super("dog", weight); // this super, send props to constructor of Animal class

    this.color = color;
  }
}

// 5 - method
class Npc {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greeting(): void {
    console.log("Hello, Wizard!");
  }
}

const berserker = new Npc("Ares");

berserker.greeting();

// 6 - this in classes
class UseThis {
  whatThis: string;

  constructor(whatThis: string) {
    this.whatThis = whatThis;
  }

  usingThis() {
    console.log(
      `I using "this" in console.log to show the prop whatThis => ${this.whatThis}`
    );
  }
}

const usingThisNow = new UseThis("Test");

usingThisNow.usingThis();

// 7 - using get in class
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const iam = new Person("Leonardo", "Barrocal");

console.log(iam.fullName); // no required invoke a get function

// 8 - using set in class
class Coords {
  // using `!` to tells typescript that we will use this field later
  latitude!: number;
  longitude!: number;

  set fillLatitude(latitude: number) {
    if (latitude <= 0) {
      return;
    }

    this.latitude = latitude;
  }

  set fillLongitude(longitude: number) {
    if (longitude <= 0) {
      return;
    }

    this.longitude = longitude;
  }
}

const myCoords = new Coords();

console.log(myCoords);

myCoords.fillLatitude = 121312;
myCoords.fillLongitude = 6122371;

console.log(myCoords);

// 9 - using interfaces with class
interface UsersRepository {
  showUser(name: string): string;
}

class User implements UsersRepository {
  showUser(name: string) {
    return name;
  }
}

// 10 - using overrides
class Base {
  baseName: string;

  constructor(baseName: string) {
    this.baseName = baseName;
  }

  callbackToShowMessage() {
    return `This is callback - ${this.baseName}`;
  }
}

class SuperBase extends Base {
  constructor() {
    super("override");
  }

  callbackToShowMessage(): string {
    // override function
    return `Used override!`;
  }
}

const mySuperBase = new SuperBase();

console.log(mySuperBase.callbackToShowMessage());

// 11 - using protected
class Protect {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperProtect extends Protect {
  constructor() {
    super("Leonardo");
  }

  showName() {
    console.log("protected: ", this.name);
  }
}

const mySuperProtect = new SuperProtect();

mySuperProtect.showName();

// 12 - private
class PrivateClass {
  private name: string = "Private";

  showName(): string {
    return this.name;
  }
}

const myPrivateClass = new PrivateClass();

console.log(myPrivateClass.showName());
// console.log(myPrivateClass.name);

// 13 - static members
class StaticMembers {
  static prop = "Test static";

  static staticMethod() {
    console.log("This is a static method");
  }
}

// When use static method, we don't require create an instance of class.
console.log(StaticMembers.prop);
StaticMembers.staticMethod();

// 14 - generic class
class Item<T, U> {
  public first: T;
  public second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}

// 15 - parameters properties
class ParametersProperties {
  constructor(
    public name: string,
    private quantity: number,
    private price: number
  ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  get showQuantity() {
    return this.quantity;
  }

  get showPrice() {
    return this.price;
  }
}

const myShirt = new ParametersProperties("Shirt", 10, 20.9);

console.log(myShirt.name);
console.log(myShirt.showPrice);
console.log(myShirt.showQuantity);

// 16 - abstract class
abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExample implements AbstractClass {
  showName(): void {
    throw new Error("Method not implemented.");
  }
}

class AbstractExampleTwo extends AbstractClass {
  public name: string;

  constructor(name: string) {
    super(); // this is required, when extend other class
    this.name = name;
  }

  showName(): void {
    throw new Error("Method not implemented.");
  }
}
