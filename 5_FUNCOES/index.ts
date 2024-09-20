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
