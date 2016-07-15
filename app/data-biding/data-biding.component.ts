import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-biding',
  templateUrl: 'data-biding.component.html',
})
export class DataBidingComponent {
  constructor() {  }

  url = 'http://loiane.com';
  urlImg = 'http://lorempixel.com/400/200/food/';
}