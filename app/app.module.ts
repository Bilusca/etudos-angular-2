import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { LifeCycleComponent } from './ciclo/life-cycle.component';

import { CursosModule } from './cursos/cursos.module';
import { DataBidingModule } from './data-biding/data-biding.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, CursosModule, FormsModule, DataBidingModule ],
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    LifeCycleComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
