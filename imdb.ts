//class imdb

import {Movie} from "./movie";
import * as fs from "fs";
let interface = require('readline-sync'); //para poder escribir en consola con el metodo question
//npm install readline-sync


export class IMDB {

        public peliculas:Movie[];

        constructor(peliculas:Movie[]){

            this.peliculas = peliculas;

        }

        //metodos

        public escribirEnFicheroJSON(nombreFichero:string){    
            
           let ficheroString = JSON.stringify(this.peliculas);
           fs.writeFileSync(nombreFichero,ficheroString);

        }

        public obtenerInstanciaImdb(nombreFichero:string):IMDB{

                    let accesoFichero = fs.readFileSync(nombreFichero, "utf-8");

                    let toObject:IMDB= JSON.parse(accesoFichero);
                    return toObject
        }

}







