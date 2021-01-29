function suma(a, b) {
  return a + b;
}
console.log("Sum with numbers", 2, 3);
console.log(suma(2, 3));

let x = 5;
let y = 9;

console.log("Sum with variables", x, y);
console.log(suma(x, y));

function suma_de_valores_en_lista(lista) {
  let resultado = 0;

  for (let num of lista) {
    resultado += num;
  }

  return resultado;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Sum with list", list);
console.log(suma_de_valores_en_lista(list));
