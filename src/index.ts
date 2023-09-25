import { Voiture } from "./Voiture";
import { Garage } from "./Garage";

const voiture1 = new Voiture("Volkswagen", "polo", 933, "bleue", 155000, 12000, 2019);
const voiture2 = new Voiture("Volvo", "XC40", 283, "rouge", 105000, 18000, 2014);
const moinsChereDesDeux = Garage.voitureMoinsChere(voiture1, voiture2)

// const garage1 = new Garage(garage1,);