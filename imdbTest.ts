import {IMDB} from "./imdb";
import {Movie} from "./movie";
import {Professional} from "./professional";
import * as fs from "fs";//asi importamos todos los metodos de FileSystem


let movie1:Movie= new Movie('Tenet', 2020,'UU.EE','fiction')
let movie2:Movie= new Movie('Mulán', 2020,'China','adventure')
let name1:Professional = new Professional("Helen McCrory",52,"Action",1.68,55,"Black","Brown","Caucasic",true,"EEUU",0,"Actress",);
let name2:Professional = new Professional("Cleant Eastwood",80,"Multiples genres",1.82,74,"White","Brown","Caucasic",false,"EEUU",5,"Director, Productor, Actor");


let acces1:IMDB = new IMDB([movie1,movie2]);
// let objetoString = JSON.stringify(acces1);//convertimos a string el objeto acces1
// fs.writeFileSync("imdbBBDD.json", objetoString);//creamos un fichero donde se guardarán las peliculas

// let ficheroLeido = (fs.readFileSync("imdbBBDD.json", "utf-8"));//'leemos' el fichero con información
// let toObject = JSON.parse(ficheroLeido);//convertimos la info en JSON
// let instancia1:IMDB = new IMDB(toObject.peliculas)//creamos instancia 
// console.log(instancia1.peliculas[0].title);


acces1.escribirEnFicheroJSON('imdbBBDD.json')//creamos fichero llamando al metodo de la clase IMDB
// let acces2:IMDB = acces1.obtenerInstanciaImdb('acces1.json')//creamos un nuevo objeto tipo IMDB a partir de otro pero 
                                                            //llenandolo con contenido de un fichero externo
console.log(acces1)
// console.log(acces2)

let instancia2





