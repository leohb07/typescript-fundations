var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - void
function withoutReturn() {
    console.log("Esta funcao nao possui um retorno");
}
withoutReturn();
// 2 - callback como parametro
function greeting(name) {
    return "Ola, bem vindo ".concat(name);
}
function preGreeting(callback, name) {
    var greet = callback(name);
    console.log(greet);
}
preGreeting(greeting, "Pedro");
preGreeting(greeting, "Julia");
// 3 - generics function
function showFirstElement(array) {
    return array[0];
}
console.log(showFirstElement([1, 2, 3, 4, 5]));
console.log(showFirstElement(["Leonardo", "Evelin", "Pedro", "Julia"]));
console.log(showFirstElement([true, false]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(mergeObjects({ name: "Leonardo" }, { age: 23 }));
// 4 - constraints
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(9, 5));
console.log(biggestNumber(2, 5));
console.log(biggestNumber("1", "3"));
// 5 - especificar tipo do argumento
function mergeArray(array1, array2) {
    return array1.concat(array2);
}
console.log(mergeArray([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergeArray([1, 2, 3, 4], ["Leonardo", "Pedro"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ola ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ola ".concat(name, ", tudo bem?");
}
console.log(modernGreeting("Leonardo"));
console.log(modernGreeting("Leonardo", "Dr."));
// 7 - parametros default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 20));
// 8 - unknown
function doSomething(x) {
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
function showErrorMessage(msg) {
    throw new Error(msg);
}
//  showErrorMessage('Algum erro!')
// 10 - rest operator
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (acc, value) { return value + acc; });
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(17623, 761253));
// 11 - destructuring como parametro
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9 ".concat(name, " e ele custa R$").concat(price);
}
console.log(showProductDetails({ name: "Camisa", price: 123.99 }));
