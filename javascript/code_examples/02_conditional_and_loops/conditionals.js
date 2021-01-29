let name = "Juan";

switch (name) {
  case "Juan":
    console.log("Es Juan");
    break;

  case "Marcos":
    console.log("Es Marcos");
    break;

  default:
    console.log("No es nadie");
}

// Ambos codigos son iguales.

if (name == "Juan") {
  console.log("Es Juan");
} else if (name == "Marcos") {
  console.log("Es Marcos");
} else {
  console.log("No es nadie");
}
