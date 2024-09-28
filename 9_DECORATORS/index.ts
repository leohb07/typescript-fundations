// 1 - first decorator
function myDecorator() {
  console.log("Start decorator");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executing decorator");

    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  public testing() {
    console.log("Finish execute method");
  }
}

const myClass = new MyClass();

myClass.testing();

// 2 - using multiples decorators
function decoratorOne() {
  console.log("Start decoratorOne");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executing decoratorOne");
  };
}

function decoratorTwo() {
  console.log("Start decoratorTwo");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executing decoratorTwo");
  };
}

function decoratorThird() {
  console.log("Start decoratorThird");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executing decoratorThird");
  };
}

class MultipleDecorators {
  @decoratorTwo() // this is instanced first
  @decoratorThird()
  @decoratorOne() // this is executed first
  public testing() {
    console.log("Finish testing");
  }
}

const multipleDecorators = new MultipleDecorators();

multipleDecorators.testing();

// 3 - class decorator
function classDecorator(constructor: Function) {
  console.log("Executing class decorator");

  if (constructor.name === "User") {
    console.log("Creating user!");
  }
}

@classDecorator
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Leonardo");
console.log(user);

// 4 - method decorator
function enumerable(value = true) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable() // if false, this method didn't listed on class
  showName() {
    console.log(this);
    return this.name;
  }
}

const myMachine = new Machine("Tractor");
console.log(myMachine.showName());

// 5 - property decorator
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      value = newValue.padStart(5, "0");
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class PropertyDecoratorTest {
  @formatNumber()
  public id: string;

  constructor(id: string) {
    this.id = id;
  }
}

const myPropertyDecorator = new PropertyDecoratorTest("1");

console.log(myPropertyDecorator);
console.log(myPropertyDecorator.id);

// Using class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  public id: number;
  public createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(1);

console.log(newBook);
console.log(newBook.createdAt);
