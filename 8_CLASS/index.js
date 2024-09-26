var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1 - fields in class
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
var man = new People();
man.name = "Leonardo";
man.age = 23;
console.log(man);
// 2 - constructor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var human = new NewUser("Leonardo", 23);
// 3 - readonly field
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var chevrolet = new Car("Cruze");
console.log(chevrolet.name);
console.log(chevrolet.wheels);
// 4 - inheritance and super
var Animal = /** @class */ (function () {
    function Animal(type, weight) {
        this.type = type;
        this.weight = weight;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(color, weight) {
        var _this = _super.call(this, "dog", weight) || this; // this super, send props to constructor of Animal class
        _this.color = color;
        return _this;
    }
    return Dog;
}(Animal));
// 5 - method
var Npc = /** @class */ (function () {
    function Npc(name) {
        this.name = name;
    }
    Npc.prototype.greeting = function () {
        console.log("Hello, Wizard!");
    };
    return Npc;
}());
var berserker = new Npc("Ares");
berserker.greeting();
// 6 - this in classes
var UseThis = /** @class */ (function () {
    function UseThis(whatThis) {
        this.whatThis = whatThis;
    }
    UseThis.prototype.usingThis = function () {
        console.log("I using \"this\" in console.log to show the prop whatThis => ".concat(this.whatThis));
    };
    return UseThis;
}());
var usingThisNow = new UseThis("Test");
usingThisNow.usingThis();
// 7 - using get in class
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var iam = new Person("Leonardo", "Barrocal");
console.log(iam.fullName); // no required invoke a get function
// 8 - using set in class
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillLatitude", {
        set: function (latitude) {
            if (latitude <= 0) {
                return;
            }
            this.latitude = latitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillLongitude", {
        set: function (longitude) {
            if (longitude <= 0) {
                return;
            }
            this.longitude = longitude;
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
console.log(myCoords);
myCoords.fillLatitude = 121312;
myCoords.fillLongitude = 6122371;
console.log(myCoords);
