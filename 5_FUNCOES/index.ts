// 1 - void
function withoutReturn() {
  console.log("Esta funcao nao possui um retorno");
}

withoutReturn();

// 2 - callback como parametro
function greeting(name: string): string {
  return `Ola, bem vindo ${name}`;
}

function preGreeting(callback: (name: string) => string, name: string): void {
  const greet = callback(name);

  console.log(greet);
}

preGreeting(greeting, "Pedro");
preGreeting(greeting, "Julia");

// 3 - generics function
function showFirstElement<T>(array: T[]): T {
  return array[0];
}

console.log(showFirstElement([1, 2, 3, 4, 5]));
console.log(showFirstElement(["Leonardo", "Evelin", "Pedro", "Julia"]));
console.log(showFirstElement([true, false]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

console.log(mergeObjects({ name: "Leonardo" }, { age: 23 }));

// 4 - constraints
function biggestNumber<T extends string | number>(a: T, b: T) {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(9, 5));
console.log(biggestNumber(2, 5));
console.log(biggestNumber("1", "3"));

// 5 - especificar tipo do argumento
function mergeArray<T>(array1: T[], array2: T[]): T[] {
  return array1.concat(array2);
}

console.log(mergeArray([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergeArray<string | number>([1, 2, 3, 4], ["Leonardo", "Pedro"]));

// 6 - parametros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Ola ${greet} ${name}, tudo bem?`;
  }

  return `Ola ${name}, tudo bem?`;
}

console.log(modernGreeting("Leonardo"));
console.log(modernGreeting("Leonardo", "Dr."));

// 7 - parametros default
function somaDefault(n: number, m = 10) {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(10, 20));

// 8 - unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    return console.log(x[0], "firs number of array");
  }

  if (typeof x === "number") {
    return console.log("X é um numero");
  }
}

doSomething([1, 2, 3]);
doSomething(5);

// 9 - never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

//  showErrorMessage('Algum erro!')

// 10 - rest operator
function sumAll(...n: number[]) {
  return n.reduce((acc, value) => value + acc);
}

console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(17623, 761253));

// 11 - destructuring como parametro
function showProductDetails({ name, price }: { name: string; price: number }) {
  return `O nome do produto é ${name} e ele custa R$${price}`;
}

console.log(showProductDetails({ name: "Camisa", price: 123.99 }));
