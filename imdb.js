"use strict";
//class imdb
exports.__esModule = true;
exports.IMDB = void 0;
var fs = require("fs");
var IMDB = /** @class */ (function () {
    function IMDB(peliculas) {
        this.peliculas = peliculas;
    }
    //metodos
    IMDB.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var ficheroString = JSON.stringify(this.peliculas);
        fs.writeFileSync(nombreFichero, ficheroString);
    };
    IMDB.prototype.obtenerInstanciaImdb = function (nombreFichero) {
<<<<<<< HEAD
        var accesoFichero = fs.readFileSync(nombreFichero, "utf-8");
        var toObject = JSON.parse(accesoFichero);
        return toObject;
=======
        // let readFile = fs.readFileSync(nombreFichero);
        // let student = JSON.parse(nombreFichero);
        // return student;  
        var fs = require('fs');
        var jsonData = JSON.parse(fs.readFileSync(nombreFichero, 'utf-8'));
        return jsonData;
>>>>>>> d1e15a4b19238bd20bdd1b1aa5bc17116b73fbbb
    };
    return IMDB;
}());
exports.IMDB = IMDB;
<<<<<<< HEAD
//let movie1:Movie= new Movie('Tenet', 2020,'UU.EE','fiction')
//let movie2:Movie= new Movie('Mulán', 2020,'China','adventure')
var acces1 = new IMDB([]);
//acces1.escribirEnFicheroJSON('acces1.json')
var acces2 = acces1.obtenerInstanciaImdb('acces1.json');
console.log(acces1);
console.log(acces2);
=======
/********************************************************************* */
//llamada a metodo escribirEnFicheroJSON
var movie1 = new movie_1.Movie('Tenet', 2020, 'UU.EE', 'fiction');
var movie2 = new movie_1.Movie('Mulán', 2020, 'China', 'adventure');
var acces1 = new IMDB([movie1, movie2]);
// console.log(acces1.escribirEnFicheroJSON("equis.json"));
/********************************************************************* */
//llamada al metodo obtenerInstanciaImdb
console.log(acces1.obtenerInstanciaImdb("imdbBBDD.json"));
// let ficheroLeido = (fs.readFileSync("imdbBBDD.json", "utf-8"));
// console.log(ficheroLeido);
// let toObject = JSON.parse(ficheroLeido);
// console.log(toObject.peliculas);
// let instancia1:IMDB = new IMDB(toObject.peliculas)
// //console.log(instancia1.peliculas[0].title);
// instancia1.escribirEnFicheroJSON("imdbBBDD.json");
>>>>>>> d1e15a4b19238bd20bdd1b1aa5bc17116b73fbbb
