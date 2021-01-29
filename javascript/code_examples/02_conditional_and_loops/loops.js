for (let i = 0; i < 10; i++) {
  console.log("for", i);
}

let value = 5;
while (value < 10) {
  console.log("while", value);
  value++;
}

do {
  console.log("do while", value);
  value++;
} while (value <= 20);

let options = "ABCD";

if (options.includes("F")) {
  console.log("Esta");
} else {
  console.log("Elige bien cabron");
}
