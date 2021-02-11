let part_2 = require("./07_02_21_part_2");

console.log(part_2);
console.log(part_2.foo);
console.log(part_2.suma(5, 5));
console.log(part_2.Reddit.url); // www.reddit.com/r/node <- works
console.log(part_2.Reddit.title); //node js. <- works
console.log(part_2.Reddit.home); //undefined <- error
/*
let lista = ["Manuel", "Juan", "Ricardo"];

for (let i = 0; i < lista.length; i++) {
  console.log(i, lista[i]);
}

console.log();

for (item in lista) {
  console.log(item, lista[item]);
}

console.log();
for (item of lista) {
  console.log(item);
}
*/
let cuak = { asd: "asd" };

exports.cuak = cuak;
