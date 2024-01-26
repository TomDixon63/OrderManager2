import { BackendService } from './../../service/backend.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BestellungenService } from './../../service/bestellungen.service';
import { Order } from 'src/app/model/order';
import { catchError } from 'rxjs';


@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    today: Date = new Date();
    tommorow: Date = new Date(this.today.getTime() + 86400000); // + 1 day in ms
    aftertommorow: Date = new Date(this.today.getTime() + 86400000 + 86400000); // + 2 day in ms


    ordersToday: Order[] = [];
    ordersTodayCount = 0;

    ordersAll: Order[] = [];
    ordersAllCount = 0;



    constructor(private bestellungenService: BestellungenService, private backendService: BackendService) {
    }


    ngOnInit() {
        console.log(" DashboardComponent -> ngOnInit()");
      // unbdingt hier, sonst funktioniert heute und alle nicht!
       // this.bestellungenService.getAllOrder();
       this.getOrders();
    }



    async getOrders() {
        console.log(" DashboardComponent -> getOrders()");
        try {
            const response = await this.bestellungenService.getAllOrder();
            console.log(response);

            this.ordersToday = await this.bestellungenService.ordersToday;
            this.ordersTodayCount = Object.keys(this.ordersTodayCount).length;

            this.ordersAll = await this.bestellungenService.ordersAll;
            this.ordersAllCount = Object.keys(this.ordersAll).length;

        } catch (err) {
            console.log(err);
            return;
        }
    }
}
