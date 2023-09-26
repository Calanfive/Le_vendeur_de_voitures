import { Vehicule } from "../Vehicule";

export class Voiture extends Vehicule{

    constructor(
        marqueVoiture: string,
        modeleVoiture: string,
        immatriculationVoiture: number,
        couleurVoiture: string,
        kilometrageVoiture: number,
        prixVoiture: number,
        anneeMiseEnCirculationVoiture: number
        ){
        super(marqueVoiture, modeleVoiture, immatriculationVoiture, couleurVoiture, kilometrageVoiture, prixVoiture, anneeMiseEnCirculationVoiture)
    }
}