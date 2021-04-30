"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var read = require("readline-sync");
//generando instancias vacias para llamar a los metodos
var moviemovie = new movie_1.Movie('', 0, '', '');
var imdb = new imdb_1.IMDB([]);
//pidiendo datos
moviemovie.title = read.question('title:');
moviemovie.releaseYear = read.question('releaseYear');
moviemovie.nationality = read.question('nationality:');
moviemovie.genre = read.question('Genre:');
// guardando en imdb las pelis anteriores y la nueva
var imdb2 = imdb.obtenerInstanciaImdb('imdbBBDD.json');
console.log(imdb2);
imdb2.peliculas.push(moviemovie);
//aqui eliminas el fichero y escribes uno nuevo con la instancia de imdb
imdb2.escribirEnFicheroJSON('imdbBBDD.json');
