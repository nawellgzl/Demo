let read = require("readline-sync");

function bigger(nbr1, nbr2, nbr3) {
    console.log(`Le plus grand nombre est ${Math.max(nbr1, nbr2, nbr3)}`);
}

let nbr1 = read.questionFloat("Entrez un premier nombre :");
let nbr2 = read.questionFloat("Entrez un deuxieme nombre :");
let nbr3 = read.questionFloat("Entrez un troisieme nombre :");

bigger(nbr1, nbr2, nbr3);