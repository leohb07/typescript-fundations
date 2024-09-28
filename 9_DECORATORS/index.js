"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - first decorator
function myDecorator() {
    console.log("Start decorator");
    return function (target, propertyKey, descriptor) {
        console.log("Executing decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("Finish execute method");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myClass = new MyClass();
myClass.testing();
// 2 - using multiples decorators
function decoratorOne() {
    console.log("Start decoratorOne");
    return function (target, propertyKey, descriptor) {
        console.log("Executing decoratorOne");
    };
}
function decoratorTwo() {
    console.log("Start decoratorTwo");
    return function (target, propertyKey, descriptor) {
        console.log("Executing decoratorTwo");
    };
}
function decoratorThird() {
    console.log("Start decoratorThird");
    return function (target, propertyKey, descriptor) {
        console.log("Executing decoratorThird");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Finish testing");
    }
}
__decorate([
    decoratorTwo() // this is instanced first
    ,
    decoratorThird(),
    decoratorOne() // this is executed first
], MultipleDecorators.prototype, "testing", null);
const multipleDecorators = new MultipleDecorators();
multipleDecorators.testing();
// 3 - class decorator
function classDecorator(constructor) {
    console.log("Executing class decorator");
    if (constructor.name === "User") {
        console.log("Creating user!");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const user = new User("Leonardo");
console.log(user);
// 4 - method decorator
function enumerable(value = true) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return this.name;
    }
}
__decorate([
    enumerable() // if false, this method didn't listed on class
], Machine.prototype, "showName", null);
const myMachine = new Machine("Tractor");
console.log(myMachine.showName());
// 5 - property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class PropertyDecoratorTest {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], PropertyDecoratorTest.prototype, "id", void 0);
const myPropertyDecorator = new PropertyDecoratorTest("1");
console.log(myPropertyDecorator);
console.log(myPropertyDecorator.id);
// Using class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
const newBook = new Book(1);
console.log(newBook);
console.log(newBook.createdAt);
