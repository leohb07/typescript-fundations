// 1 - generics
function showData(arg) {
    return "O valor \u00E9: ".concat(arg);
}
console.log(showData("Leonardo"));
console.log(showData(23));
console.log(showData(true));
// 2 - constrains com generics
function showProduct(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var myObj = { name: "Carregador" };
var otherProduct = { name: "Carror" };
console.log(showProduct(myObj));
console.log(showProduct(otherProduct));
