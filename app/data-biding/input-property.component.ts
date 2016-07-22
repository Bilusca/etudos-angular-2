import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'curso',
  template: `
    <h4>{{ nomeCurso }}</h4>
  `,
  inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent {
  //@Input('nome') nomeCurso : string = '';
  nomeCurso: string = '';
  constructor() {

  }

}