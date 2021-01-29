let name = "Pol";

switch (name) {
  case "Pol":
    console.log("Es Pol");
    break;

  case "Necros":
    console.log("Es Necros");
    break;

  default:
    console.log("No es nadie");
}

if (name == "Pol") {
  console.log("Es Pol");
} else if (name == "Necros") {
  console.log("Es Necros");
} else {
  console.log("No es nadie");
}
let x = 9;
let y = 1;

function suma(list_of_nums) {
  let resultado = 0;

  for (num of list_of_nums) {
    resultado += num;
  }

  return resultado;
}

let nums = [1, 2, 3, 4, 5, 6];
console.log(nums);
console.log(suma(nums));

/* Restaurante:

Mostrara al usuario una carta para que elija lo que quiere tomar.
En esa carta, cada plato tendra un precio.
Y habra que preguntar al usuario si quiere seguir comiendo.
Darle platos hasta que diga que no. Al final decirle la cuenta.*/

let readline = require("readline-sync");

let options = "AB";
let menu = ["A) Pizza", "B) Pasta"];
let prices = { A: 1, B: 5 };
let final_price = 0;
let option, option2;

do {
  console.log("Choose you plate:");
  console.log(menu[0]);
  console.log(menu[1]);
  option = readline.question("Option: ");

  if (!options.includes(option)) {
    console.log("Select between A and B.");
    option2 = "y";
    continue;
  }

  final_price += prices[option];

  option2 = readline.question("Do yo want more? (y/n)");
  console.log(option2);
} while (option2 == "y");
console.log("Fin de la cena, la cuenta es:", final_price);
