import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LagerbestandRoutingModule } from './lagerbestand-routing.module';
import { LagerbestandComponent } from './lagerbestand.component';


@NgModule({
  declarations: [
    LagerbestandComponent
  ],
  imports: [
    CommonModule,
    LagerbestandRoutingModule
  ]
})
export class LagerbestandModule { }
