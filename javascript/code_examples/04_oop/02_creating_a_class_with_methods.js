class Person {
  constructor(name, surename) {
    this.name = name;
    this.surename = surename;
  }

  get_full_name() {
    return this.name + " " + this.surename;
  }
}

let person1 = new Person("Keith", "Swan");
let person2 = new Person("Jhon", "Smith");

console.log(
  "My name is " + person1.name + " and my surename is " + person1.surename
);
console.log(
  "My name is " + person2.name + " and my surename is " + person2.surename
);

console.log("My full name is " + person1.get_full_name());
console.log("My full name is " + person2.get_full_name());
