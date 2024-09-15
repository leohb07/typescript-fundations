// 1 - Number
let x: number = 10;

console.log(x);

let y: number = 81.1266;

console.log(y);
console.log("TYPE:", typeof y);
console.log(y.toPrecision(5));
console.log(y.toFixed(3));

// 2 - String
const firstName: string = "Leonardo";
const lastName: string = "Barrocal";

const fullName: string = firstName + " " + lastName;

console.log(fullName);
console.log(fullName.toUpperCase());
console.log("TYPE:", typeof fullName);

// 3 - Boolean
let isTrue: boolean = true;

console.log(isTrue);
console.log("TYPE:", typeof isTrue);

isTrue = false;

console.log(isTrue);
