import { Vehicule } from "../Vehicule";

export class Moto extends Vehicule{

    constructor(
        marqueMoto: string,
        modeleMoto: string,
        immatriculationMoto: number,
        couleurMoto: string,
        kilometrageMoto: number,
        prixMoto: number,
        anneeMiseEnCirculationMoto: number
        ){
        super(marqueMoto, modeleMoto, immatriculationMoto, couleurMoto, kilometrageMoto, prixMoto, anneeMiseEnCirculationMoto)
    }
}