import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungenAlleRoutingModule } from './bestellungen-alle-routing.module';
import { BestellungenAlleComponent } from './bestellungen-alle.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    BestellungenAlleComponent
  ],
  imports: [
    CommonModule,
    BestellungenAlleRoutingModule,
    TableModule,
    ButtonModule,
  ],

schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BestellungenAlleModule { }
