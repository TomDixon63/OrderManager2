import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungenMorgenRoutingModule } from './bestellungen-morgen-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BestellungenMorgenComponent } from './bestellungen-morgen.component';


@NgModule({
  declarations: [
    BestellungenMorgenComponent,
  ],
  imports: [
    CommonModule,
    BestellungenMorgenRoutingModule,
    TableModule,
    ButtonModule,
  ],

schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BestellungenMorgenModule { }
