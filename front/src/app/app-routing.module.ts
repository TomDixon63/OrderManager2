import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './manager/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./manager/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'bestellungen', loadChildren: () => import('./manager/components/bestellungen/bestellungen.module').then(m => m.BestellungenModule) },
                    { path: 'lagerbestand', loadChildren: () => import('./manager/components/lagerbestand/lagerbestand.module').then(m => m.LagerbestandModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./manager/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./manager/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
