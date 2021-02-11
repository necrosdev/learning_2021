let part_1 = require("./07_02_21_part_1");

console.log(part_1.cuak);
let Reddit = {
  title: "the front page of the internet.",
  url: "www.reddit.com",
  home: "Cuak",
};

let foo = "Hola";

function suma(a, b) {
  return a + b;
}

//module.exports = Reddit;
exports.foo = foo;
exports.suma = suma;
exports.Reddit = Reddit;
