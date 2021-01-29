// Static methods are class methods, can't use 'this'.

class Person {
  constructor(name, surename) {
    this.name = name;
    this.surename = surename;
  }

  static speak() {
    return "Hello world!";
  }
}

let person1 = new Person("Keith", "Swan");
let person2 = new Person("Jhon", "Smith");

console.log(Person.speak());
// console.log(person1.speak()); <- This wont work causing a TypeError
