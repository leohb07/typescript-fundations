"use strict";
// 1 - fields in class
class People {
}
const man = new People();
man.name = "Leonardo";
man.age = 23;
console.log(man);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const human = new NewUser("Leonardo", 23);
// 3 - readonly field
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const chevrolet = new Car("Cruze");
console.log(chevrolet.name);
console.log(chevrolet.wheels);
// 4 - inheritance and super
class Animal {
    constructor(type, weight) {
        this.type = type;
        this.weight = weight;
    }
}
class Dog extends Animal {
    constructor(color, weight) {
        super("dog", weight); // this super, send props to constructor of Animal class
        this.color = color;
    }
}
// 5 - method
class Npc {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hello, Wizard!");
    }
}
const berserker = new Npc("Ares");
berserker.greeting();
// 6 - this in classes
class UseThis {
    constructor(whatThis) {
        this.whatThis = whatThis;
    }
    usingThis() {
        console.log(`I using "this" in console.log to show the prop whatThis => ${this.whatThis}`);
    }
}
const usingThisNow = new UseThis("Test");
usingThisNow.usingThis();
// 7 - using get in class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const iam = new Person("Leonardo", "Barrocal");
console.log(iam.fullName); // no required invoke a get function
// 8 - using set in class
class Coords {
    set fillLatitude(latitude) {
        if (latitude <= 0) {
            return;
        }
        this.latitude = latitude;
    }
    set fillLongitude(longitude) {
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
class User {
    showUser(name) {
        return name;
    }
}
// 10 - using overrides
class Base {
    constructor(baseName) {
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
    callbackToShowMessage() {
        // override function
        return `Used override!`;
    }
}
const mySuperBase = new SuperBase();
console.log(mySuperBase.callbackToShowMessage());
// 11 - using protected
class Protect {
    constructor(name) {
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
