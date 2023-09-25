import { Voiture } from "./Voiture";

export class Garage {
    private _nomGarage: string;
    private _listingVoitures: Voiture[]; 
    
    constructor (
        nomGarage: string,
        listingVoitures: Voiture []
    ){
        this._nomGarage = nomGarage;
        this._listingVoitures = listingVoitures;
    }
    
    public get nomGarage(): string {
        return this._nomGarage;
    }
    public set nomGarage(value: string) {
        this._nomGarage = value;
    }
    
    public get listingVoitures(): Voiture[] {
        return this._listingVoitures;
    }
    public set listingVoitures(value: Voiture[]) {
        this._listingVoitures = value;
    }

    static voitureMoinsChere(modele1: Voiture, modele2: Voiture) {
        return modele1.prix > modele2.prix ? modele2 : modele1
    }

    getVoitureCheaper(){
        let min = this._listingVoitures[0]

        for (let i = 0; i < this._listingVoitures.length; i++) {
            const voiture = this._listingVoitures[i];
            min = Garage.voitureMoinsChere(min, voiture)
        }

        return min
    }

    
}