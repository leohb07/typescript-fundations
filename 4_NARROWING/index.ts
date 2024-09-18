// 1 - typeof guard

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossivel realizar a soma!");
  }
}

sum("4", "123");
sum(12, 12312);
sum("5", 23);

// 2 - checando se valor existe

function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total);
      console.log(multiply);
    }
  } else {
    console.log("Por favor, defina uma operacao");
  }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");

// 3 - instance of

class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const leo = new SuperUser("Leo");
const john = new User("John");

console.log(leo);
console.log(john);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log("Ola ADMIN");
  } else if (user instanceof User) {
    console.log("Ola usuario");
  }
}

userGreeting(leo);
userGreeting(john);

// 4 - operador in
class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemao");

function showDogDetails(dog: Dog) {
  if ("breed" in dog) {
    console.log("O cachorro e de raca");
  } else {
    console.log("O cachorro e um SRD");
  }
}

showDogDetails(turca);
showDogDetails(bob);
