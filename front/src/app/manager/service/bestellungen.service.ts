import { CalcService } from './calc.service';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Mappingservice } from './mapping.service';
import { Order } from 'src/app/model/order';

@Injectable({
    providedIn: 'root'
})
export class BestellungenService {

    ordersToday: Order[] = [];
    ordersTommorow: Order[] = [];
    ordersAfterTommorow: Order[] = [];
    ordersAll: Order[] = [];

    constructor(private backendService: BackendService, private mappingService: Mappingservice, private calcService: CalcService) {
    }

    // gets all orders and organizes them to arrays: ordersToday, ordersAll ...
    public async getAllOrder() {
        console.log(" BestellungenService -> getAllOrder()");
        this.backendService.getAllOrder().subscribe((response: any) => {
            //     console.log(response);
            const responseAsString: string = JSON.stringify(response);
            if (responseAsString.includes("Error")) {
                //todo alert implementieren
                //this.alertService.warn(responseAsString);
                console.log("getAllOrder() -> Error ");
            } else {
                //  console.log(responseAsString);
                this.mappingService.response2OrderMapper(response);
/*
             
                */
            }

        });
        
        this.getAllInvoices();

        this.ordersToday = [];
        this.ordersTommorow = [];
        this.ordersAfterTommorow = [];
        this.ordersAll = [];

        this.ordersToday = this.mappingService.ordersToday;
        this.ordersTommorow = this.mappingService.ordersTommorow;
        this.ordersAfterTommorow = this.mappingService.ordersAfterTommorow;
        this.ordersAll = this.mappingService.ordersAll;

        console.log("today");
        console.log(this.ordersToday);
        console.log("tommorow");
        console.log(this.ordersTommorow);
        console.log("aftertommorow");
        console.log(this.ordersAfterTommorow);
        console.log("all");
        console.log(this.ordersAll);


    }

    public async getAllInvoices() {
        console.log(" BestellungenService -> getAllInvoices()");
        this.backendService.getAllInvoices().subscribe((response: any) => {
            const responseAsString: string = JSON.stringify(response);
            if (responseAsString.includes("Error")) {
                //todo alert implementieren
                //this.alertService.warn(responseAsString);
                console.log("getAllInvoices() -> Error ");
            } else {
                console.log(responseAsString);
                this.mappingService.invoiceResponse2OrderMapper(response);
            }

        });

    }

}