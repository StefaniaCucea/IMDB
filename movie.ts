
import {Professional} from './professional'

export class Movie{

    public title:string
    public releaseYear:number
    public actors:Professional[]
    public nationality: string
    public director: Professional
    public writer: Professional
    public language: String
    public platform: string
    public isMCU: boolean
    public mainCharacterName: String
    public producer: Professional
    public distributor: Professional
    public genre: string
    
    constructor(titleP:string, releaseYearP:number, nationalityP:string, genreP:string){

        this.title= titleP
        this.releaseYear=releaseYearP
        this.actors
        this.nationality=nationalityP
        this.director
        this.writer
        this.language
        this.platform
        this.isMCU
        this.mainCharacterName
        this.producer
        this.distributor
        this.genre=genreP
    }

    toString():string
    {
        return `The movie's characteristics are:
                Title: ${this.title}
                Release year:${this.releaseYear}
                Actors:${this.actors}
                Nationality:${this.nationality}
                Director:${this.director}
                Writer:${this.writer}
                Language:${this.language}
                Plataform:${this.platform}
                ¿Is MCU?:${this.isMCU}
                Main's character name :${this.mainCharacterName}
                Productor:${this.producer}
                Distribuitor:${this.distributor}
                Genre:${this.genre}`
    }

}