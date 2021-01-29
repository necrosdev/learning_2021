class Person {
  constructor(name, surename) {
    this.name = name;
    this.surename = surename;
  }
}

let person1 = new Person("Keith", "Swan");
let person2 = new Person("Jhon", "Smith");

console.log(person1, typeof person1);
console.log(person2, typeof person2);
