import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from "primeng/inputnumber";
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


import { LagerbestandRoutingModule } from './lagerbestand-routing.module';
import { LagerbestandComponent } from './lagerbestand.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
    ReactiveFormsModule,
    FormsModule,
    MessagesModule,
		MessageModule,
	],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LagerbestandModule { }
