import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestellungenHeuteComponent } from './bestellungen-heute.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: BestellungenHeuteComponent }
  ])],
  exports: [RouterModule]
})
export class BestellungenHeuteRoutingModule { }

