// Numbers
let number; // Declaracion de la variable 'number'.
number = 5; // Asignacion del numero 5 a la variable 'number'.
typeof number; // El resultado del tipo sera 'number'.

let number2 = 5; // Declaracion y asignacion de la variable en una linea.
typeof number2; // El resultado del tipo sera 'number'

// Strings
let character_string = "Hello World!";
typeof character_string; // El resultado del tipo sera 'string'

// Booleans
let is_empty = false;
typeof is_empty; // El resultado del tipo sera 'boolean'

// Null and Undefined
let is_null = null;
typeof is_null; // El resultado es 'object'
// El resultado es un objeto con referencia nula, por eso sale 'object'.

let is_undefined;
typeof is_undefined; // El resultado es 'undefined'

// Para comprobar que null y undefined son diferentes.
null == undefined; // true, pues ambos hacen referencia a la falta de dato.
null === undefined; // false, pues mientras que uno tiene referencia aunque nula, el otro no ha llegado a ser inicializado.

// Lists and maps

let list_names = ["Jhon", "James", "Zack"];
console.log(list_names);
// Añadir un elemento a una lista
list_names.push("Keith");
console.log(list_names);

let map_data = { name: "Jhon", surename: "Smith" };
// Añadir un elemento a un mapa
map_data["Zack"] = "Borg";
console.log(map_data);
