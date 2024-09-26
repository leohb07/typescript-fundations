function showProductDetails(product) {
    console.log("O produto ".concat(product.name, " custa R$").concat(product.price.toFixed(2)));
    if (product.isActive) {
        console.log("Este produto está ativo!");
    }
}
var shirt = {
    name: "Camisa",
    price: 79.9,
    isActive: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Bola", price: 129.9, isActive: true });
function showUserDetails(user) {
    console.log("O usuario tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A funcao do usuario e: ".concat(user.role));
    }
}
var u1 = { email: "leonardo@gmail.com", role: "Admin" };
var u2 = { email: "joao@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
var corolla = {
    brand: "Toyota",
    wheels: 4,
};
console.log(corolla);
var coords = {
    x: 10,
    y: 123,
};
console.log(coords);
var people = {
    age: 24,
    name: "Leonardo",
};
var batman = {
    age: 34,
    name: "Batman",
    powers: ["Lutar", "Dinheiro"],
};
console.log(people);
console.log(batman);
var arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
// 7 - Readonly array
var myArray = ["Leonardo", "Evelin", "Pedro"];
// myArray[2] = "Julia";
myArray.forEach(function (name) { return console.log("Nome: ".concat(name)); });
myArray = myArray.map(function (name) { return "Meu nome \u00E9: ".concat(name); });
console.log(myArray);
var user = ["Leonardo", 23];
console.log(user);
// 9 - tuplas readonly
function showArray(number) {
    // number[0] = "Leonardo";
    console.log(number[0]);
    console.log(number[1]);
}
showArray(["Leonardo", 23]);
