import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Mappingservice } from './mapping.service';
import { Order } from 'src/app/model/order';

@Injectable({
    providedIn: 'root'
})
export class BestellungenService {

    ordersToday: Order[] = [];
    ordersAll: Order[] = [];

    constructor(private backendService: BackendService, private mappingService: Mappingservice) {
    }

    // gets all orders and organizes them to arrays: ordersToday, ordersAll ...
    public async getAllOrder() {
        //  console.log(" BestellungenService -> getAllOrder()");
        this.backendService.getAllOrder().subscribe((response: any) => {
            console.log(response);
            const responseAsString: string = JSON.stringify(response);
            if (responseAsString.includes("Error")) {
                //todo alert implementieren
                //this.alertService.warn(responseAsString);
                console.log("getAllOrder() -> Error ");
            } else {
                console.log(responseAsString);
                this.mappingService.response2OrderMapper(response);
                this.ordersToday = [];
                this.ordersAll = [];
                this.ordersToday = this.mappingService.ordersToday;
                this.ordersAll = this.mappingService.ordersAll;
            }
        });
    }

}



