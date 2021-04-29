"use strict";
//class
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    //constructor
    function Professional(name, age, genre, weight, height, haircolor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = haircolor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
    //metodos
    Professional.prototype.listProfessional = function () {
        console.log("Name: " + this.name + "\nAge: " + this.age + "\nMovie Genre: " + this.genre + "\nWeight: " + this.weight + "\nHeight: " + this.height + "\nHair Color: " + this.hairColor + "\nEye Color: " + this.eyeColor + "\nRace: " + this.race + "\nRetired?: " + this.isRetired + "\nNationality: " + this.nationality + "\nNumber of Oscar\u00B4s: " + this.oscarNumber + "\nProfession: " + this.profession + "\n");
    };
    return Professional;
}());
exports.Professional = Professional;
