# Projet initial pour vos exercices d'algorithmie en typescript

## Installation

1. Clonez le projet
```bash
cd ~/dev
mkdir poo
cd poo
git clone git@github.com:ThomasLaforge/poo-setup-simplon.git poo-template
```
2. Déplacez vous dans le dossier cloné
```bash
cd poo-template
```
3. Supprimez le dossier `.git`
```bash
rm -rf .git
```
3. installez les dépendances
```bash
npm install
``` 
4. Lancez le projet
```bash
npm run dev
```
5. Modifiez le fichier `src/index.ts` pour commencer à coder


# TP - Vendeur de voitures

## Scenario

Vous êtes à la tête d'un petit commerce de voiture d'occasion.
Vous avez un stock de 5 voitures.
Une voiture est un objet qui possède les attributs suivants :

- marque
- modèle
- immatriculation
- couleur
- kilométrage
- prix
- année de mise en circulation

Vous avez un client qui souhaite la voiture la moins chère de votre stock.
Un client veut une voiture rouge avec le plus de kilomètres possible.

1 - Créez une classe Voiture et une classe Garage qui contient une liste de voitures
2 - Renseignez les attributs de la classe Voiture
3 - Renseignez les attributs de la classe Garage (nom du garage et liste de voitures)
4 - Créez une méthode qui permet de renvoyer la voiture la moins chère du garage
5 - Créez une méthode qui permet de récupérer toutes les voitures d'une certaine couleur
6 - Créez des instances de ces classes pour répondre aux besoins des différents clients

## Bonus

Le garage souhaite vendre d'autres véhicules que des voitures.
Un client souhaite acheter une moto noire.
Un client souhaite acheter un camion de plus de 30000km.

7 - Créez une classe abstraite Vehicule qui contient les attributs communs à tous les véhicules
8 - Créez une classe Voiture qui hérite de Vehicule
9 - Créez une classe Moto qui hérite de Vehicule
10 - Modifiez la classe Garage qui contient une liste de véhicules
11 - Créez une méthode pour récupérer une sous liste de véhicules en fonction du type de véhicule
12 - Créez des instances de ces classes pour répondre aux besoins des différents clients