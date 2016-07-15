import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  moduleId: module.id,
  selector: 'cursos-lista',
  /* template: `
    <p>Olá, meu nome é {{nome}}</p>
    <ul>
      <li *ngFor="let curso of cursos">{{curso}}</li>
    </ul>
  ` */
  templateUrl: 'cursos.component.html',
  providers: [CursosService]
})

export class CursosComponent {
  nome = 'Lucas';

  cursos;

  constructor(cursoService: CursosService){
    this.cursos = cursoService.getCursos();
  }
}