import { Garage } from "./Garage";
import { Camion } from "./Vehicules/Camion";
import { Moto } from "./Vehicules/Moto";
import { Voiture } from "./Vehicules/Voiture";

const voiture1 = new Voiture("Volkswagen", "polo", 933, "bleue", 155000, 12000, 2019);
const voiture2 = new Voiture("Volvo", "XC40", 283, "rouge", 105000, 18000, 2014);
const voiture3 = new Voiture("Renault", "RS", 666, "noire", 123456, 30000, 2010);
const voiture4 = new Voiture("Dacia", "Duster", 732, "bleue", 105000, 10000, 2016);

const moto1 = new Moto("Susuki", "AF", 123, "jaune", 12000, 8000, 2012)
const moto2 = new Moto("Kawazaki", "KM", 456, "blanche", 17000, 6500, 2011) 

const camion1 = new Camion("Renault", "BKR", 735, "vert", 122222, 15000, 2014)
const camion2 = new Camion("Peugeolt", "ARF", 912, "noir", 360000, 20000, 2009)

const moinsChereDesDeux = Garage.getvoitureMoinsChere(voiture1, voiture2)


const garage1 = new Garage("garage1", [voiture1, voiture2, voiture3 ,voiture4], [] )

const bluecars = garage1.getCarsByColor("bleue");
console.log('blues', bluecars);

console.log("result", garage1.getCarCheaper());


