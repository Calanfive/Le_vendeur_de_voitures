import { Vehicule } from "./Vehicule";
import { Voiture } from "./Vehicules/Voiture";

export class Garage {
    private _nomGarage: string;
    private _listingVoitures: Voiture[]; 
    private _listingVehicules: Vehicule[];
    
    constructor(
        nomGarage: string,
        listingVoitures: Voiture [],
        listingVehicules: Vehicule[]
        ){
            this._nomGarage = nomGarage;
            this._listingVoitures = listingVoitures;
            this._listingVehicules = listingVehicules;
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
    
        public get listingVehicules(): Vehicule[] {
            return this._listingVehicules;
        }
        public set listingVehicules(value: Vehicule[]) {
            this._listingVehicules = value;
        }


    static getvoitureMoinsChere(modele1: Voiture, modele2: Voiture) {
        return modele1.prix > modele2.prix ? modele2 : modele1
    }
    
    getCarCheaper(){
        let min = this._listingVoitures[0]

        for (let i = 0; i < this._listingVoitures.length; i++) {
            const voiture = this._listingVoitures[i];
            min = Garage.getvoitureMoinsChere(min, voiture)
        }

        return min
    }


    getCarsByColor(couleur: string){
        let tab = []

        for (let iCar = 0; iCar < this._listingVoitures.length; iCar++) {
            const element = this._listingVoitures[iCar];
            if (element.couleur === couleur) {
                tab.push(element)
            }
            
        }

        return tab
    }

    getTypeOfVehicules(categorie: String){
        let tabl = []

        for (let index = 0; this._listingVehicules.length < tabl.length; index++) {
            const box = this._listingVehicules[index];
            if (categorie instanceof Vehicule) {
                tabl.push(categorie)
            }
        }
    }
}