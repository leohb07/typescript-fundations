"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
console.log(typeof numbers);
let names = ["Leonardo", "Henrique", "Barrocal"];
names.push("John");
console.log(names[0]);
console.log(typeof names);
// 2 - any
let anyTest = [1, 2, 23, true, [], {}, "Leonardo"];
console.log(anyTest);
anyTest.push([1, 2, 3]);
console.log(anyTest);
// 3 - parametros
function soma(a, b) {
    return a + b;
}
let result = soma(1, 2);
// soma("1", "2");
console.log(result);
// 4 - retorno da funcao
function soma2(a, b) {
    return a + b;
}
let result2 = soma2(23, 123);
console.log(result2);
// 5 - Tipos de objeto
function passCoordinates(coord) {
    console.log(`X coordinate: ${coord.x}`);
    console.log(`Y coordinate: ${coord.y}`);
}
const objCoord = {
    x: 123,
    y: 1237,
};
passCoordinates(objCoord);
// 6 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 7 - validando um argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Ola, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Leonardo", "Barrocal"));
console.log(advancedGreeting("Leonardo"));
// 8 - union types
function showBalance(balance) {
    // Caso seja string, pode vir um valor que nao e o que estamos esperando
    if (Number(balance))
        console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("200");
// 9 - avancando em union types
function showUserRole(role) {
    // typeof e um grande amigo quando precisamos verificar o que estamos recebendo
    if (typeof role === "boolean") {
        return `Usuario nao possui uma funcao!`;
    }
    return `A funcao do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId("11263102");
showId(871236712);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 12312,
    y: 182301,
    z: 1618231,
};
showCoords(coordObj);
const somePeople = {
    age: 23,
    name: "Leonardo",
};
console.log(somePeople);
// 13 - literal types => seguindo o mesmo modelo do union type
function showDirection(direction) {
    console.log(`A direcao é: ${direction}`);
}
showDirection("center");
// 14 - non null assertion operators `!`
// podemos ter problema caso nao exista esse valor e inserimos o non null assertion `!`
const p = document.getElementById("some-p");
console.log(p.innerText);
