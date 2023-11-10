import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './manager/components/notfound/notfound.component';

import { ProductService } from './manager/service/product.service';
import { CountryService } from './manager/service/country.service';
import { CustomerService } from './manager/service/customer.service';
import { EventService } from './manager/service/event.service';
import { IconService } from './manager/service/icon.service';
import { NodeService } from './manager/service/node.service';
import { PhotoService } from './manager/service/photo.service';
import { Mappingservice } from './manager/service/mapping.service';
import { BackendService } from './manager/service/backend.service';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },

        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, Mappingservice, BackendService

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
