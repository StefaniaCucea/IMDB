//class imdb

import {Movie} from "./movie";
import * as fs from "fs";


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

}

let movie1:Movie= new Movie('Tenet', 2020,'UU.EE','fiction')
let movie2:Movie= new Movie('Mulán', 2020,'China','adventure')

let acces1:IMDB = new IMDB([movie1,movie2]);

console.log(acces1.escribirEnFicheroJSON("equis.json"));












// let ficheroLeido = (fs.readFileSync("imdbBBDD.json", "utf-8"));

// console.log(ficheroLeido);

// let toObject = JSON.parse(ficheroLeido);
// console.log(toObject.peliculas);
// let instancia1:IMDB = new IMDB(toObject.peliculas)
// //console.log(instancia1.peliculas[0].title);

// instancia1.escribirEnFicheroJSON("imdbBBDD.json");





