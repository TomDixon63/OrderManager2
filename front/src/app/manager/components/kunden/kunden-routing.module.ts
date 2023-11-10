import { KundenComponent } from './kunden.component'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component:KundenComponent }
    ])],
    exports: [RouterModule]
})
export class KundenRoutingModule { }