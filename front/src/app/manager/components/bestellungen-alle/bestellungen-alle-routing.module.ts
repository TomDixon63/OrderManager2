import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestellungenAlleComponent } from './bestellungen-alle.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: BestellungenAlleComponent }
  ])],
  exports: [RouterModule]
})
export class BestellungenAlleRoutingModule { }
