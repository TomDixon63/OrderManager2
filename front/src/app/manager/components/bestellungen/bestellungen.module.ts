import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungenRoutingModule } from './bestellungen-routing.module';
import { BestellungenComponent } from './bestellungen.component';


@NgModule({
  declarations: [
    BestellungenComponent
  ],
  imports: [
    CommonModule,
    BestellungenRoutingModule
  ]
})
export class BestellungenModule { }
