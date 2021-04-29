"use strict";
//impor de class Professional
exports.__esModule = true;
var professional_1 = require("./professional");
var name1 = new professional_1.Professional("Helen McCrory", 52, "Action", 1.68, 55, "Black", "Brown", "Caucasic", true, "EEUU", 0, "Actress");
var name2 = new professional_1.Professional("Cleant Eastwood", 80, "Multiples genres", 1.82, 74, "White", "Brown", "Caucasic", false, "EEUU", 5, "Director, Productor, Actor");
console.log(name1.listProfessional());
console.log(name2.listProfessional());
