class Person {
  constructor(name, surename) {
    this.name = name;
    this.surename = surename;
  }

  recordar(dato) {
    this.dato = dato;
  }
}

let person1 = new Person("Keith", "Swan");
let person2 = new Person("Jhon", "Smith");

console.log(person1, typeof person1);
console.log(person2, typeof person2);
console.log(person1.dato);
person1.recordar("Cuak");
console.log(person1.dato);

// Menu con platos y su precio

class Plato {
  constructor(nombre_plato, precio) {
    this.name = nombre_plato;
    this.price = precio;
  }
}

let p1 = new Plato("Pasta", 1.5);
let p2 = new Plato("Arroz", 2.5);
let p3 = new Plato("Pizza", 5.5);

let menu = [];
menu[0] = new Plato("Pasta", 1.5);
menu.push(new Plato("Arroz", 2.5));
menu.push(new Plato("Pizza", 5.5));
console.log(menu);
console.log(menu[0]);
console.log(menu[1]);
console.log(menu[2]);

let p4 = new Plato("Pinya", 1.7);
let p5 = new Plato("Pomelo", 2.8);
let p6 = new Plato("Batata", 5.3);
toString(p4.name);
let menu2 = {
  [p4.name]: p4,
  [p5.name]: p5,
  [p6.name]: p6,
};
console.log("El menu 2", menu2);
console.log(menu2["Pomelo"]);

console.log("\n Menu 1 - List format");
for (let plato of menu) {
  console.log(plato);
}

console.log("\n Menu 2 - Dict format");
for (let key in menu2) {
  console.log(menu2[key]);
}

let eleccion = "Batata";
let price = menu2[eleccion].price;
console.log("El precio de", eleccion, "es", price);

let eleccion2 = "Pasta";
let price2;

for (let plato of menu) {
  if (plato.name == eleccion2) {
    price2 = plato.price;
    break;
  }
}

console.log("El precio de", eleccion2, "es", price2);

class Plate {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Restaurante {
  constructor(name) {
    this.name = name;
    this.plates = [];
  }
  new_plate_obj(plate) {
    this.plates.push(plate);
  }
  new_plate(name, price) {
    this.plates.push(new Plate(name, price));
  }
}

let res = new Restaurante("NecrosHome");
res.new_plate("Pizza", 8.5);
let p1 = new Plate("Tarta", 4);
res.new_plate_obj(p1);
