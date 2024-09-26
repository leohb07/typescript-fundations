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
  // using `!` to tells typescript that use this field later
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
