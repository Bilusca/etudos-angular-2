import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputPropertyComponent } from './input-property.component';
import { OutputPropertyComponent } from './output-property.component';
import { DataBidingComponent } from './data-biding.component';

@NgModule ({
  imports: [ CommonModule, FormsModule ],
  declarations: [ InputPropertyComponent, OutputPropertyComponent, DataBidingComponent ],
  exports: [ DataBidingComponent ]
})

export class DataBidingModule { }