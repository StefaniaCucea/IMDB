"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(titleP, releaseYearP, nationalityP, genreP) {
        this.title = titleP;
        this.releaseYear = releaseYearP;
        this.actors;
        this.nationality = nationalityP;
        this.director;
        this.writer;
        this.language;
        this.platform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genreP;
    }
    Movie.prototype.toString = function () {
        return "The movie's characteristics are:\n                Title: " + this.title + "\n                Release year:" + this.releaseYear + "\n                Actors:" + this.actors + "\n                Nationality:" + this.nationality + "\n                Director:" + this.director + "\n                Writer:" + this.writer + "\n                Language:" + this.language + "\n                Plataform:" + this.platform + "\n                \u00BFIs MCU?:" + this.isMCU + "\n                Main's character name :" + this.mainCharacterName + "\n                Productor:" + this.producer + "\n                Distribuitor:" + this.distributor + "\n                Genre:" + this.genre;
    };
    return Movie;
}());
exports.Movie = Movie;
