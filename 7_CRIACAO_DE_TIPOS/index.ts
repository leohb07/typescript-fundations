// 1 - generics
function showData<T>(arg: T) {
  return `Value is ${arg}`;
}

console.log(showData("Leonardo"));
console.log(showData(23));
console.log(showData(true));

// 2 - constrains with generics
function showProduct<T extends { name: string }>(obj: T) {
  return `This product is ${obj.name}`;
}

const myObj = { name: "Changer" };
const otherProduct = { name: "Car" };
const thirdObject = { age: 23, isOld: false, name: "Leonardo" };

console.log(showProduct(myObj));
console.log(showProduct(otherProduct));
console.log(showProduct(thirdObject));

// 3 - generics with interface
interface People<T, U> {
  name: string;
  lastName: T;
  age: U;
}

type Man = People<string, number>;
type Woman = People<string, number>;

const isMan: Man = {
  age: 23,
  lastName: "Barrocal",
  name: "Leonardo",
};

const isWoman: Woman = {
  age: 23,
  lastName: "Barrocal",
  name: "Evelin",
};

// 4 - type params
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `The object has key = ${obj[key]}`;
}

const obj = {
  model: "MacBook",
  year: 2017,
};

console.log(getSomeKey(obj, "model"));

// 5 - keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myChar: Character = {
  age: 23,
  hasDriveLicense: true,
  name: "Leonardo",
};

console.log(showCharName(myChar, "name"));

// 6 - typeof type operator
const nameOne: string = "Leonardo";

const nameTwo: typeof nameOne = "Evelin";
