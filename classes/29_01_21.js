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
