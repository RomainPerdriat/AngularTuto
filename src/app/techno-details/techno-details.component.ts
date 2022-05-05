import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Technology } from '../models/technology';

@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css']
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech : Technology;
  // Le input ici permet d'insérer la prop à la base de notre parent. input car c'est comme faire une incision pour insérer un nouvel el
 // En important Technology depuis mes models, toutes mes tech bénéficieront de la même structure de Classe.
  @Output() deleteTech = new EventEmitter<Technology>();
 //  Output me permet de remonter dans le composant parent (équivaut au fonction de callback en React)
 //je crée l'événement deleteTech qui sera de type emitter
  constructor() { }

  ngOnInit(): void {
  }

  delete(tech: Technology) {
    console.log('delete', tech);
    this.deleteTech.emit(tech);
  }

}
