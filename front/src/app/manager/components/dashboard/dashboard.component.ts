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



    constructor(private bestellungenService: BestellungenService) {

    }

    ngOnInit() {
        this.getOrders().then(console.log);
    }

    async getOrders(this: any) {
        try {
            const response = await this.bestellungenService.getAllOrder();
            console.log('1');
            console.log(response);
            console.log('2');

        } catch (err) {
            console.log(err);
            return;
        }
    }

    /*
    getOrders = async() => {
        try {
            await this.bestellungenService.getAllOrder();
            this.ordersToday = await this.bestellungenService.ordersToday;
            this.ordersTodayCount = Object.keys(this.ordersTodayCount).length;

            this.ordersAll = await this.bestellungenService.ordersAll;
            this.ordersAllCount = Object.keys(this.ordersAll).length;
            return;
        }catch(err){
            console.log(err);
            return;
        }

    }
    */





}
