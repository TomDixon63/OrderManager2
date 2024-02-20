import { BestellungenUebermorgenComponent } from './bestellungen-uebermorgen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: BestellungenUebermorgenComponent }
  ])],
  exports: [RouterModule]
})

export class BestellungenUebermorgenRoutingModule { }
