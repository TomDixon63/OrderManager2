import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './manager/components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';

import { Mappingservice } from './manager/service/mapping.service';
import { BackendService } from './manager/service/backend.service';
import { LagerBestandService } from './manager/service/lagerbestand.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },

        Mappingservice, BackendService, LagerBestandService

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
 }
