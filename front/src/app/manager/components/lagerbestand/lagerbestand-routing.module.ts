import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LagerbestandComponent } from './lagerbestand.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: LagerbestandComponent }
])],
  exports: [RouterModule]
})
export class LagerbestandRoutingModule { }
