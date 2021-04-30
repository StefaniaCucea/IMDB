import {IMDB} from "./imdb"
import {Movie} from "./movie";

let read = require("readline-sync");

let  titulo = read.question(`Title: `);
let  year = read.question(`ReleaseYear: `);
let  nation = read.question(`TNationality: `);
let  genre = read.question(`Genre: `);

console.log(titulo.obtenerInstanciaImdb("imdbBBDD.json"));
console.log(year.obtenerInstanciaImdb("imdbBBDD.json"));
console.log(nation.obtenerInstanciaImdb("imdbBBDD.json"));
console.log(genre.obtenerInstanciaImdb("imdbBBDD.json"));