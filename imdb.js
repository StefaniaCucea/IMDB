"use strict";
//class imdb
exports.__esModule = true;
exports.IMDB = void 0;
var movie_1 = require("./movie");
var fs = require("fs");
//let interface = require('readline-sync'); //para poder escribir en consola con el metodo question
//npm install readline-sync
var IMDB = /** @class */ (function () {
    function IMDB(peliculas) {
        this.peliculas = peliculas;
    }
    //metodos
    IMDB.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var ficheroString = JSON.stringify(this.peliculas);
        fs.writeFileSync(nombreFichero, ficheroString);
    };
    return IMDB;
}());
exports.IMDB = IMDB;
var movie1 = new movie_1.Movie('Tenet', 2020, 'UU.EE', 'fiction');
var movie2 = new movie_1.Movie('Mulán', 2020, 'China', 'adventure');
var acces1 = new IMDB([movie1, movie2]);
console.log(acces1.escribirEnFicheroJSON("equis.json"));
// let ficheroLeido = (fs.readFileSync("imdbBBDD.json", "utf-8"));
// console.log(ficheroLeido);
// let toObject = JSON.parse(ficheroLeido);
// console.log(toObject.peliculas);
// let instancia1:IMDB = new IMDB(toObject.peliculas)
// //console.log(instancia1.peliculas[0].title);
// instancia1.escribirEnFicheroJSON("imdbBBDD.json");
