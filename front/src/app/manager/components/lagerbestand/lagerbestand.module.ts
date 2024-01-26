import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from "primeng/inputnumber";
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

import { LagerbestandRoutingModule } from './lagerbestand-routing.module';
import { LagerbestandComponent } from './lagerbestand.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LagerbestandComponent
  ],
  imports: [
    CommonModule,
    LagerbestandRoutingModule,
    InputNumberModule,
    ToolbarModule,
    ButtonModule,
    FormsModule
  ]
})
export class LagerbestandModule { }
