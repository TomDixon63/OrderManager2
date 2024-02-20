import { BackendService } from './../../service/backend.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BestellungenService } from './../../service/bestellungen.service';
import { Order } from 'src/app/model/order';
import { catchError } from 'rxjs';
import { UtilityService } from '../../service/utility.service';


@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    /*
    today: Date = new Date();
    tommorow: Date = new Date(this.today.getTime() + 86400000); // + 1 day in ms
    aftertommorow: Date = new Date(this.today.getTime() + 86400000 + 86400000); // + 2 day in ms
*/
    ordersToday: Order[] = [];
    ordersTodayCount = 0;

    ordersAll: Order[] = [];
    ordersAllCount = 0;


    w2B: number[] = [300, 33, -20, -44];


    today: string;
    tommorow: string;
    aftertommorow: string;

    constructor(private bestellungenService: BestellungenService, private backendService: BackendService, private utilityService: UtilityService) {
     
    }


    ngOnInit() {
        console.log(" DashboardComponent -> ngOnInit()");

        this.today = this.utilityService.todayString;
        this.tommorow = this.utilityService.tommorowString;
        this.aftertommorow = this.utilityService.aftertommorowString;
        this.getOrders();
       
        // unbedingt hier, sonst funktioniert heute und alle nicht!
        //this.bestellungenService.getAllOrder();
      
       

    }

    async getOrders() {
        console.log(" DashboardComponent -> getOrders()");
        try {
            const response = await this.bestellungenService.getAllOrder();
            console.log(response);

            this.ordersToday = this.bestellungenService.ordersToday;
            this.ordersTodayCount = Object.keys(this.ordersTodayCount).length;

            this.ordersAll = this.bestellungenService.ordersAll;
            this.ordersAllCount = Object.keys(this.ordersAll).length;

            console.log( this.ordersToday.toString);
            console.log( this.ordersAll.toString);

        } catch (err) {
            console.log(err);
            return;
        }
    }

}
