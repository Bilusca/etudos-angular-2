import { Component } from '@angular/core';
import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { CursosComponent } from './cursos/cursos.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { LifeCycleComponent } from './ciclo/life-cycle.component'

@Component({
    selector: 'my-app',
    template: `
        <!--h1>Angular 2 Boilerplate</h1>
        <p>Olá Mundo!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
        <exemplo-data-biding></exemplo-data-biding-->
        <lifecycle [valorInicial]="valorInicial" *ngIf="deletarConteudo != true"></lifecycle>
        <button (click)="valorInicial = 20">Mudar Valor</button>
        <button (click)="deletarConteudo = true">Deletar conteudo da Tag</button>
    `,
    directives: [
      MeuPrimeiroComponent,
      CursosComponent,
      DataBidingComponent,
      LifeCycleComponent
    ]
})
export class AppComponent {
  deletarConteudo = false;
  valorInicial = 15;
}
