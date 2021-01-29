let readline = require("readline-sync");

class Cls {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

let classes = {
  fighter: new Cls("fighter", "The Fighter."),
  cleric: new Cls("cleric", "The Cleric."),
  wizard: new Cls("wizard", "The Wizard."),
};

class Race {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

let races = {
  human: new Race("human", 30),
  goblin: new Race("goblin", 25),
  gnome: new Race("gnome", 25),
};

class Character {
  constructor(name, cls, race) {
    this.name = name;
    this.cls = cls;
    this.race = race;
  }
}
class Party {
  constructor() {
    this.characters = [];
  }

  new_member(name, cls, race) {
    this.characters.push(new Character(name, classes[cls], races[race]));
  }
}

let party1 = new Party();

party1.new_member("Jhon", "fighter", "human");
party1.new_member("Jhon", "fighter", "human");

console.log(party1);
console.log(party1.characters[0].cls);
console.log(party1.characters[0].race);

let party = new Party();

let resp = "y";
let name, cls, race;
while (resp != "n") {
  name = readline.question("Character name: ");
  cls = readline.question("Character class: ");
  race = readline.question("Character race: ");
  party.new_member(name, cls, race);

  resp = readline.question("Do you want another character in the party? (y/n)");
}

console.log(party);
