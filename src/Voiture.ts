export class Voiture {
    private _marque: string;
    private _modele: string;
    private _immatriculation: number;
    private _kilometrage: number;
    private _couleur: string;
    private _prix: number;
    private _anneeMiseEnCirculation: number;
    
    constructor ( 
        marque: string,
        modele: string,
        immatriculation: number,
        couleur: string,
        kilometrage: number,
        prix: number,
        anneeMiseEnCirculation: number
        ) 
        {
        this._marque = marque;
        this._modele = modele;
        this._immatriculation = immatriculation;
        this._couleur = couleur;
        this._kilometrage = kilometrage;
        this._prix = prix; 
        this._anneeMiseEnCirculation = anneeMiseEnCirculation;
    }
        
    public get prix(){
        return this._prix
    }
    
    public get couleur() {
        return this._couleur;
    }
}
