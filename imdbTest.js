"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var movie1 = new movie_1.Movie('Tenet', 2020, 'UU.EE', 'fiction');
var movie2 = new movie_1.Movie('Mulán', 2020, 'China', 'adventure');
var name1 = new professional_1.Professional("Helen McCrory", 52, "Action", 1.68, 55, "Black", "Brown", "Caucasic", true, "EEUU", 0, "Actress");
var name2 = new professional_1.Professional("Cleant Eastwood", 80, "Multiples genres", 1.82, 74, "White", "Brown", "Caucasic", false, "EEUU", 5, "Director, Productor, Actor");
var acces1 = new imdb_1.IMDB([movie1, movie2]);
// let objetoString = JSON.stringify(acces1);//convertimos a string el objeto acces1
// fs.writeFileSync("imdbBBDD.json", objetoString);//creamos un fichero donde se guardarán las peliculas
// let ficheroLeido = (fs.readFileSync("imdbBBDD.json", "utf-8"));//'leemos' el fichero con información
// let toObject = JSON.parse(ficheroLeido);//convertimos la info en JSON
// let instancia1:IMDB = new IMDB(toObject.peliculas)//creamos instancia 
// console.log(instancia1.peliculas[0].title);
acces1.escribirEnFicheroJSON('imdbBBDD.json'); //creamos fichero llamando al metodo de la clase IMDB
// let acces2:IMDB = acces1.obtenerInstanciaImdb('acces1.json')//creamos un nuevo objeto tipo IMDB a partir de otro pero 
//llenandolo con contenido de un fichero externo
console.log(acces1);
// console.log(acces2)
var instancia2;
