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
        var accesoFichero = fs.readFileSync(nombreFichero, "utf-8");
        var toObject = JSON.parse(accesoFichero);
        return toObject;
    };
    return IMDB;
}());
exports.IMDB = IMDB;
//let movie1:Movie= new Movie('Tenet', 2020,'UU.EE','fiction')
//let movie2:Movie= new Movie('Mulán', 2020,'China','adventure')
var acces1 = new IMDB([]);
//acces1.escribirEnFicheroJSON('acces1.json')
var acces2 = acces1.obtenerInstanciaImdb('acces1.json');
console.log(acces1);
console.log(acces2);
