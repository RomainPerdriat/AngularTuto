import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.css']
})
export class TechnoAddComponent implements OnInit {
 // Je crée mon instance de service, c'est a dire une instance de technoservice que j'ai définit dans ma classe techno.service.ts
 //Je définis l'accesseur, ici ce sera private car je n'ai pas besoin de mon instance en dehors de ma classe, pas besoin dans mon html. Je la nomme technoService et je lui donne le type  TechnoService qui renvoie en fait à la classe utilisé pour l'initier.
 // Donc la structure c'est : accesseur + nom + Type (importer automatiquement pour nous qui pointe le service ou est notre classe)
  constructor( private technoService : TechnoService) { }

  ngOnInit(): void {
  }

  addTechno(form) {
    // console.log(form.value);
    this.technoService.createTechno(form.value)
    // Ici avec le this je peux aller cibler mon instance qui contient grâce à mon injection createTechno.
    //Cette méthode attendant un argument, je lui passe la value de mon form
  }
}
