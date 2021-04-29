import {IMDB} from "./imdb";
import {Movie} from "./movie";
import {Professional} from "./professional";



let movie1:Movie= new Movie('Tenet', 2020,'UU.EE','fiction')
let movie2:Movie= new Movie('Mulán', 2020,'China','adventure')

let name1:Professional = new Professional("Helen McCrory",52,"Action",1.68,55,"Black","Brown","Caucasic",true,"EEUU",0,"Actress",);
let name2:Professional = new Professional("Cleant Eastwood",80,"Multiples genres",1.82,74,"White","Brown","Caucasic",false,"EEUU",5,"Director, Productor, Actor");

let acces1:IMDB = new IMDB([movie1,movie2]);

console.log(acces1.peliculas[0].toString());

