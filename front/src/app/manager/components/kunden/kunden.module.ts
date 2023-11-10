import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KundenComponent } from './kunden.component';
import { KundenRoutingModule } from './kunden-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    KundenComponent
  ],
  imports: [
    CommonModule,
    KundenRoutingModule,
    TableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KundenModule { }


