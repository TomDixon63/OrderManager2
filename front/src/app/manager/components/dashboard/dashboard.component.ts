import { BackendService } from './../../service/backend.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BestellungenService } from './../../service/bestellungen.service';
import { Order } from 'src/app/model/order';
import { UtilityService } from '../../service/utility.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductsEnum } from 'src/app/model/enums';
import { Bestand } from 'src/app/model/bestand';

interface expandedRows {
    [key: string]: boolean;
}


@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    today: string;
    tommorow: string;
    aftertommorow: string;

    ordersToday: Order[] = [];
    ordersTodayCount = 0;

    ordersTommorow: Order[] = [];
    ordersTommorowCount = 0;

    ordersAfterTommorow: Order[] = [];
    ordersAfterTommorowCount = 0;

    ordersAll: Order[] = [];
    ordersAllCount = 0;

    loading: boolean = true;
    expandedRows: expandedRows = {};
    isExpanded: boolean = false;

    bestandList: Bestand[] = [];


    constructor(private bestellungenService: BestellungenService, private utilityService: UtilityService, private http: HttpClient) {
        console.log("DashboardComponent -> constructor()");
        this.today = this.utilityService.todayString;
        this.tommorow = this.utilityService.tommorowString;
        this.aftertommorow = this.utilityService.aftertommorowString;
    }


    ngOnInit() {
        console.log(" DashboardComponent -> ngOnInit()");
        this.loading = false;

        this.getOrders();
       
        this.getLagerBestand();



    }

     getLagerBestand() {
        console.log("DashboardComponent ->  getBestand()");
        this.http.get<any>(environment.nodeserverget).subscribe(data => {
            console.log(data);
            this.mapResponseLagerBestand(data);
        });
    }


    private getBestaende(){




    }
    private mapResponseLagerBestand(response: any) {
        console.log("DashboardComponent ->  mapResponseGetBestand()");
        for (const key in response) {

            if (Object.prototype.hasOwnProperty.call(response, key)) {
                let b: Bestand = new Bestand();
                // let value = response[key];
                b.lager = response[key];
                if (key === 'w2BCount') {
                    b.description = ProductsEnum.W2B.valueOf();
                    this.bestandList.push(b);
                }

                if (key === 'w5BCount') {
                    b.description = ProductsEnum.W5B.valueOf();
                    this.bestandList.push(b);
                }
                if (key === 'w15BCount') {
                    b.description = ProductsEnum.W15B.valueOf();
                    this.bestandList.push(b);
                }
                if (key === 'wlCount') {
                    b.description = ProductsEnum.WL.valueOf();
                    this.bestandList.push(b);
                }
                if (key === 'c2BCount') {
                    b.description = ProductsEnum.C2B.valueOf();
                    this.bestandList.push(b);
                }
                if (key === 'c5BCount') {
                    b.description = ProductsEnum.C5B.valueOf();
                    this.bestandList.push(b);
                }
                if (key === 'c15BCount') {
                    b.description = ProductsEnum.C15B.valueOf();
                    this.bestandList.push(b);
                }
                if (key === 'clCount') {
                    b.description = ProductsEnum.CL.valueOf();
                    this.bestandList.push(b);
                }

            }

        }
       // console.log(this.bestandList);

    }

    async getOrders() {
        console.log(" DashboardComponent -> getOrders()");
        try {
            const response = await this.bestellungenService.getAllOrder();
            //  console.log(response);

            this.ordersToday = this.bestellungenService.ordersToday;
            this.ordersTodayCount = Object.keys(this.ordersToday).length;

            this.ordersTommorow = this.bestellungenService.ordersTommorow;
            this.ordersTommorowCount = Object.keys(this.ordersTommorow).length;

            this.ordersAfterTommorow = this.bestellungenService.ordersAfterTommorow;
            this.ordersAfterTommorowCount = Object.keys(this.ordersAfterTommorow).length;

            this.ordersAll = this.bestellungenService.ordersAll;
            this.ordersAllCount = Object.keys(this.ordersAll).length;

            /*
             console.log( this.ordersToday);
             console.log( this.ordersTommorow);
             console.log( this.ordersAfterTommorow);
             console.log( this.ordersAll);
*/
        } catch (err) {
            console.log(err);
            return;
        }
    }


}
