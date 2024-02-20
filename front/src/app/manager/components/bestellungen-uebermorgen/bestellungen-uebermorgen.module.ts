import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungenUebermorgenRoutingModule } from './bestellungen-uebermorgen-routing.module';
import { BestellungenUebermorgenComponent } from './bestellungen-uebermorgen.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    BestellungenUebermorgenComponent
  ],
  imports: [
    CommonModule,
    BestellungenUebermorgenRoutingModule,
    TableModule,
    ButtonModule,
  ],

schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BestellungenUebermorgenModule { }
