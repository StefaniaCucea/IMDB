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
            
           let ficheroString = JSON.stringify(this);
           fs.writeFileSync(nombreFichero,ficheroString);

        }

        public obtenerInstanciaImdb(nombreFichero:string):IMDB{

            let JSONgenerado = fs.readFileSync(nombreFichero, "utf-8");
            let stringToObject: IMDB = JSON.parse(JSONgenerado);

            let imdbDevuelto:IMDB = new IMDB(stringToObject.peliculas)
            return imdbDevuelto
        }

}







