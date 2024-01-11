import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungenHeuteRoutingModule } from './bestellungen-heute-routing.module';
import { BestellungenHeuteComponent } from './bestellungen-heute.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    BestellungenHeuteComponent,
   
  ],
  imports: [
    CommonModule,
    BestellungenHeuteRoutingModule,
    TableModule,
    ButtonModule,
  ],

schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BestellungenHeuteModule { }
