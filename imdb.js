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
        var ficheroString = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, ficheroString);
    };
    IMDB.prototype.obtenerInstanciaImdb = function (nombreFichero) {
        var JSONgenerado = fs.readFileSync(nombreFichero, "utf-8");
        var stringToObject = JSON.parse(JSONgenerado);
        var imdbDevuelto = new IMDB(stringToObject.peliculas);
        return imdbDevuelto;
    };
    return IMDB;
}());
exports.IMDB = IMDB;
