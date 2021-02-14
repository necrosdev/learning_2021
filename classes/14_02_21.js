let fs = require("fs");

let data = ["Hola", "Adios"];
let filename = "cuak.cuak";
/*
fs.writeFile(filename, data, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Hola > cuak.cuak");
});
*/

var file = fs.createWriteStream(filename);
file.on("error", function (err) {
  console.log("Tenemos un error", err);
});

data.forEach(function (value) {
  file.write(value + "\n");
});

file.end();
