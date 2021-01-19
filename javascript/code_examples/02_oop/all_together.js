class Person {
  constructor(name, surename) {
    this.name = name;
    this.surename = surename;
  }
  get_full_name() {
    return this.name + " " + this.surename;
  }
  static speak() {
    return "Hello world!";
  }
}

console.log("Static Method");
console.log(Person.speak());

let person1 = new Person("Keith", "Swan");
let person2 = new Person("Jhon", "Smith");

console.log("Person1 Information ->", person1);
console.log("Name ", person1.name);
console.log("Surename ", person1.surename);
console.log("Full name", person1.get_full_name());

console.log("Person2 Information ->", person2);
console.log("Name ", person2.name);
console.log("Surename ", person2.surename);
console.log("Full name", person2.get_full_name());
