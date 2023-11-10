import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestellungenComponent } from './bestellungen.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: BestellungenComponent }
])],
  exports: [RouterModule]
})
export class BestellungenRoutingModule { }
