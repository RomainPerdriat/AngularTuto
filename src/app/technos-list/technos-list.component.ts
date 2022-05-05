import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-technos-list',
  templateUrl: './technos-list.component.html',
  styleUrls: ['./technos-list.component.css']
})
export class TechnosListComponent implements OnInit {

  allTechnos = []
  // Trés important, pour récupérer une instance on fait appel au constructor, on définit l'accesseur, le nom puis le type
    constructor(private ts : TechnoService) { }

  //Ici à chaque chargement de ma page je récupère les technos existantes, c'est un peu l'équivalent de useEffect().
  ngOnInit(): void {
    this.getTechnos();
  }

  getTechnos () {
    this.allTechnos = this.ts.getTechnos();
  }
  deleteTechno (techno: Technology) {
    console.log('delete Techno', techno);
    this.ts.deleteTechnos(techno);
    this.allTechnos = this.ts.getTechnos();
  }
}
