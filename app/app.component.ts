import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Olá Mundo!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
        <exemplo-data-biding></exemplo-data-biding>
        <lifecycle [valorInicial]="valorInicial" *ngIf="deletarConteudo != true"></lifecycle>
        <button (click)="valorInicial = 20">Mudar Valor</button>
        <button (click)="deletarConteudo = true">Deletar conteudo da Tag</button>
    `
})
export class AppComponent {
  deletarConteudo = false;
  valorInicial = 15;
}
