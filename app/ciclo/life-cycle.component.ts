import { Component,
         OnInit,
         OnChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy
       } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'selector',
  template: `

  `,
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {  }

  ngOnInit() {
    console.log('ngOnInit');
  }
}