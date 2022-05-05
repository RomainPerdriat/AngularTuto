import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
  //technos n'a pas besoin d'être visible de l'extérieur donc je le met en private
 private technos = [];
  // Ici, j'initialise un tableau vide car au début je n'ai pas de technos

  constructor() { }
 //Ensuite je crée la méthode qui va venir ajouter dans ce tableau vide ma nouvelle techno.
  createTechno(techno) {
    const newTechno = {id : Date.now(), ...techno};
    this.technos = [newTechno, ...this.technos];
    console.log (`tableau après ajout de ma tech`, this.technos)
  }
  // Pour ce faire, je n'oublie pas d'utiliser le this, je récupère avec le spread operator tout ce qu'il y avait avant dans le tableau et ensuite, je place devant ma nouvelle techno.


}
