import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestellungenMorgenComponent } from './bestellungen-morgen.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: BestellungenMorgenComponent }
  ])],
  exports: [RouterModule]
})

export class BestellungenMorgenRoutingModule { }
