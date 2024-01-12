import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Mappingservice } from './mapping.service';
import { Order } from 'src/app/model/order';

@Injectable({
    providedIn: 'root'
})
export class BestellungenService {

    //current: Date = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
    //followingDay: Date = new Date(this.current.getTime() + 86400000); // + 1 day in ms

    heute: Date = new Date();
    morgen: Date = new Date(this.heute.getTime() + 86400000); // + 1 day in ms
    uebermorgen: Date = new Date(this.morgen.getTime() + 86400000); // + 1 day in ms

    ordersToday: Order[] = [];
    ordersAll: Order[] = [];
    
    constructor(private backendService: BackendService, private mappingService: Mappingservice) {
    }

    // gets all orders and organizes them to arrays: ordersToday, ordersAll ...
    public getAllOrder() {
        this.backendService.getAllOrder().subscribe((response: any) => {
            console.log(response);
            const responseAsString: string = JSON.stringify(response);
            if (responseAsString.includes("Error")) {
                //todo alert implementieren
                //this.alertService.warn(responseAsString);
                console.log("getAllOrder() -> Error ");
            } else {
                this.mappingService.response2OrderMapper(response);
                this.ordersToday = [];
                this.ordersAll = [];
                this.ordersToday = this.mappingService.ordersToday;
                this.ordersAll = this.mappingService.ordersAll;
            }
        });

    }

}