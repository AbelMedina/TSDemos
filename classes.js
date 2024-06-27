// class Person {
//   constructor() {}
//   msg: string;
//   speak() {
//     console.log(this.msg);
//   }
// }
// const tom = new Person();
// tom.msg = "hello";
// tom.speak();
var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person("Hello");
// tom.msg = "hello";
tom.speak();
