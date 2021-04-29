//class

export class Professional {

     public name:string;
     public age:number;
     public genre:string;
     public weight:number;
     public height:number;
     public hairColor:string;
     public eyeColor:string;
     public race:string;
     public isRetired:boolean;
     public nationality:string;
     public oscarNumber:number;
     public profession:string;
     
     //constructor

     constructor(name:string, age:number, genre:string, weight:number, height:number, haircolor:string, eyeColor:string,
        race:string, isRetired:boolean, nationality:string, oscarNumber:number, profession:string){

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

        public listProfessional ():void{

            console.log(`Name: ${this.name}\nAge: ${this.age}\nMovie Genre: ${this.genre}\nWeight: ${this.weight}\nHeight: ${this.height}\nHair Color: ${this.hairColor}\nEye Color: ${this.eyeColor}\nRace: ${this.race}\nRetired?: ${this.isRetired}\nNationality: ${this.nationality}\nNumber of Oscar´s: ${this.oscarNumber}\nProfession: ${this.profession}\n`)

        }




}