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
                    { path: 'kunden', loadChildren: () => import('./manager/components/kunden/kunden.module').then(m => m.KundenModule) },
                    { path: 'documentation', loadChildren: () => import('./manager/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    /*
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                    */
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
