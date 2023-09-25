export class Voiture {
    private _marque: string;
    private _modele: string;
    private _immatriculation: number;
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
        anneeMiseEnCirculation: number) 
        {
            this._marque = marque;
            this._modele = modele;
            this._immatriculation = immatriculation;
            this._couleur = couleur;
            this._kilometrage = kilometrage;
            this._prix = prix; 
            this._anneeMiseEnCirculation = anneeMiseEnCirculation;
        }
        public get marque(): string {
            return this._marque;
        }
        public set marque(value: string) {
            this._marque = value;
        }

        public get modele(): string {
            return this._modele;
        }
        public set modele(value: string) {
            this._modele = value;
        }

        public set immatriculation(value: number) {
            this._immatriculation = value;
        }
        public get immatriculation(): number {
            return this._immatriculation;
        }

        public set couleur(value: string) {
            this._couleur = value;
        }
        public get couleur(): string {
            return this._couleur;
        }

        private _kilometrage: number;
        public get kilometrage(): number {
            return this._kilometrage;
        }
        public set kilometrage(value: number) {
            this._kilometrage = value;
        }

        public get prix(): number {
            return this._prix;
        }
        public set prix(value: number) {
            this._prix = value;
        }

        public get anneeMiseEnCirculation(): number {
            return this._anneeMiseEnCirculation;
        }
        public set anneeMiseEnCirculation(value: number) {
            this._anneeMiseEnCirculation = value;
        }
        
    }