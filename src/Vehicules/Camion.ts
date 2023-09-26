import { Vehicule } from "../Vehicule";

export class Camion extends Vehicule{

    constructor(
        marqueCam: string,
        modeleCam: string,
        immatriculationCam: number,
        couleurCam: string,
        kilometrageCam: number,
        prixCam: number,
        anneeMiseEnCirculationCam: number
        ){
        super(marqueCam, modeleCam, immatriculationCam, couleurCam, kilometrageCam, prixCam, anneeMiseEnCirculationCam)
    }
}