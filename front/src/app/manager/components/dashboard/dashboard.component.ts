import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { BestellungenService } from './../../service/bestellungen.service';
import { Order } from 'src/app/model/order';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    heute: Date = new Date();

    ordersToday: Order[] = [];
    ordersTodayCount = 0;

    ordersAll: Order[] = [];
    ordersAllCount = 0;

    constructor(public layoutService: LayoutService, private bestellungenService: BestellungenService) {

    }

    ngOnInit() {
        this.bestellungenService.getAllOrder();
        this.ordersToday = this.bestellungenService.ordersToday;
        this.ordersTodayCount = Object.keys(this.ordersTodayCount).length;
        this.ordersAll = this.bestellungenService.ordersAll;
        this.ordersAllCount = Object.keys(this.ordersAll).length;
    }

    ngOnDestroy() {
        this.ordersToday = [];
        this.ordersTodayCount = 0;
        this.ordersAll = [];
        this.ordersAllCount = 0;
    }
}
