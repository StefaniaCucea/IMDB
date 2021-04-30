// import {IMDB} from "./imdb"
// import {Movie} from "./movie";
var read = require("readline-sync");
var titulo = read.question("Title: ");
var year = read.question("ReleaseYear: ");
var nation = read.question("TNationality: ");
var genre = read.question("Genre: ");
console.log(titulo.obtenerInstanciaImdb("imdbBBDD.json"));
console.log(year.obtenerInstanciaImdb("imdbBBDD.json"));
console.log(nation.obtenerInstanciaImdb("imdbBBDD.json"));
console.log(genre.obtenerInstanciaImdb("imdbBBDD.json"));
