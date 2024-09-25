// 1 - tipo de objeto para funcao com interface
interface Product {
  name: string;
  price: number;
  isActive: boolean;
}

function showProductDetails(product: Product) {
  console.log(`O produto ${product.name} custa R$${product.price.toFixed(2)}`);
  if (product.isActive) {
    console.log("Este produto está ativo!");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 79.9,
  isActive: true,
};

showProductDetails(shirt);
showProductDetails({ name: "Bola", price: 129.9, isActive: true });

// 2 - propriedades opcional em interface
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuario tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A funcao do usuario e: ${user.role}`);
  }
}

const u1: User = { email: "leonardo@gmail.com", role: "Admin" };
const u2: User = { email: "joao@gmail.com" };

showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const corolla: Car = {
  brand: "Toyota",
  wheels: 4,
};

console.log(corolla);

// 4 - index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
  y: 123,
};

console.log(coords);

// 5 - extending interfaces
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  powers: string[];
}

const people: Human = {
  age: 24,
  name: "Leonardo",
};

const batman: SuperHuman = {
  age: 34,
  name: "Batman",
  powers: ["Lutar", "Dinheiro"],
};

console.log(people);
console.log(batman);

// 6 - intersection type
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);

// 7 - Readonly array
let myArray: ReadonlyArray<string> = ["Leonardo", "Evelin", "Pedro"];
// myArray[2] = "Julia";

myArray.forEach((name) => console.log(`Nome: ${name}`));

myArray = myArray.map((name) => `Meu nome é: ${name}`);

console.log(myArray);

// 8 - tuplas
type nameAndAge = [string, number];

const user: nameAndAge = ["Leonardo", 23];
console.log(user);

// 9 - tuplas readonly
function showArray(number: readonly [string, number]) {
  // number[0] = "Leonardo";

  console.log(number[0]);
  console.log(number[1]);
}

showArray(["Leonardo", 23]);
