import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-biding',
  templateUrl: 'data-biding.component.html',
  /* styles: [
    `
      .highlight{
        background-color: yellow;
        font-weight: bold;
      }
    `
  ] */
  styleUrls: ['data-biding.component.css']
})
export class DataBidingComponent {
  constructor() {  }

  url = 'http://loiane.com';
  urlImg = 'http://lorempixel.com/400/200/food/';

  conteudoAtual : string = '';
  conteudoSalvo : string = '';

  isMouseOver = false;

  nome : string = '';
  cor: string = '';

  nomeCurso : string = 'Curso Angular 2';

  valorInicial : number = 10;

  onClick(){
    alert('Olár!');
  }

  onKeyup(event){
    console.log(event.target.value);
    this.conteudoAtual = event.target.value;
  }

  onSave(value){
    this.conteudoSalvo = value;
  }

  onMouseSpan(){
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event){
    alert(event.novoValor);
  }
}