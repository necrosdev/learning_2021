// Tipos de datos.
let numero; // Declaras la variable.
console.log(numero, typeof numero);

numero = 5; // Asignas 5 a la variable.
console.log(numero, typeof numero);

numero = "5";
console.log(numero, typeof numero);

numero = true;
console.log(numero, typeof numero);

numero = 5.15;
console.log(numero, typeof numero);

numero = null;
console.log(numero, typeof numero);

// Trasnformacion de datos.
let edad = "5.15s";
let edad2 = "s5.1s5";
console.log(edad, typeof edad);
console.log(edad2, typeof edad2);

edad = parseInt(edad);
console.log(edad, typeof edad);

edad2 = parseFloat(edad2);
console.log(edad2, typeof edad2);

// Operaciones de strings.
let num = "5";
let cadena = "asd";
console.log(cadena + num); // Concatena las variables.
console.log(cadena * num); // Devuelve NaN

/*
<= // Menor o igual que.
=> // Mayor o igual que.
== // Igual que.
<  // Menor que.
>  // Mayor que.
!= // Distinto.
*/

// Condicionales.
let b = 20;
if (b < 20 && b < 40) {
  console.log("Es menor que 20");
} else if (b > 20) {
  console.log("Es mayor que 20");
} else {
  console.log("Es 20");
}

// a && a   -> Ambos tienen que ser ciertos para entrar.
// b || b   -> Con que uno sea cierto, ya entra.
// Bucles

let a = 5;
for (let a = 0; a < 10; a++) {
  console.log("for", a);
}

while (a < 10) {
  console.log("while", a);
  a++;
}

do {
  console.log("do while", a);
  a++;
} while (a <= 20);

console.log(a);

// Listas y mapas.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros, typeof numeros);
//            0     1   2     3    4       5
let cuak = ["qwe", 95, true, NaN, null, undefined];
console.log(cuak, typeof cuak);
console.log(cuak[0]);

let dict = {
  // Key:Value
  9: "asd",
  qwe: "qwe",
};

console.log(dict, typeof dict);
console.log(dict[9], typeof dict[9]);

let name = "name";
let persona = {
  name: "Pol",
  edad: 15,
};

console.log(persona[name]);
