import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungenRoutingModule } from './bestellungen-routing.module';
import { BestellungenComponent } from './bestellungen.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    BestellungenComponent
  ],
  imports: [
    CommonModule,
    BestellungenRoutingModule,
    TableModule,
    ButtonModule,
    TabViewModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class BestellungenModule { }



