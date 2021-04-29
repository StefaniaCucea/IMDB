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

        public obtenerInstanciaImdb(nombreFichero:string):IMDB{

                    let accesoFichero = fs.readFileSync(nombreFichero, "utf-8");

                    let toObject:IMDB= JSON.parse(accesoFichero);
                    return toObject
        }

}

//let movie1:Movie= new Movie('Tenet', 2020,'UU.EE','fiction')
//let movie2:Movie= new Movie('Mulán', 2020,'China','adventure')

let acces1:IMDB = new IMDB([])

//acces1.escribirEnFicheroJSON('acces1.json')
let acces2:IMDB = acces1.obtenerInstanciaImdb('acces1.json')

console.log(acces1)
console.log(acces2)







