import {IMDB} from "./imdb"
import {Movie} from "./movie";
import * as fs from "fs";
let read = require("readline-sync");

//generando instancias vacias para llamar a los metodos
let moviemovie:Movie= new Movie('',0,'','')
let imdb:IMDB= new IMDB([])

//pidiendo datos
moviemovie.title= read.question('title:')
moviemovie.releaseYear= read.question('releaseYear')
moviemovie.nationality= read.question('nationality:')
moviemovie.genre= read.question('Genre:')

// guardando en imdb las pelis anteriores y la nueva
let imdb2 = imdb.obtenerInstanciaImdb('imdbBBDD.json')
console.log(imdb2);

imdb2.peliculas.push(moviemovie)
//aqui sobreescribes sobre el fichero con la instancia de imdb

imdb2.escribirEnFicheroJSON('imdbBBDD.json');
