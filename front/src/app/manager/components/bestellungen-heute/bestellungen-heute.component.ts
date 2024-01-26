import { CalcService } from './../../service/calc.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/model/order';
import { BestellungenService } from './../../service/bestellungen.service';


interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-bestellungen-heute',
  templateUrl: './bestellungen-heute.component.html',
  styleUrls: ['./bestellungen-heute.component.scss']
})
export class BestellungenHeuteComponent implements OnInit, OnDestroy {

  today: Date = new Date();

  orders: Order[] = [];
  ordersCount = 0;

  //bags:
  w2BCount: number = 0;

  w5BCount: number = 0;
  w15BCount: number = 0;
  //kg:
  wlCount: number = 0;
  wTotalCount: number = 0;

  //bags:
  c2BCount: number = 0;
  c5BCount: number = 0;
  c15BCount: number = 0;

  //kg:
  clCount: number = 0;
  cTotalCount: number = 0;

  loading: boolean = true;
  expandedRows: expandedRows = {};
  isExpanded: boolean = false;


  constructor(private bestellungenService: BestellungenService, private calcService: CalcService) {

  }

  ngOnInit() {
    console.log(" BestellungenHeuteComponent -> ngOnInit()");
    this.initData();
    this.loading = false;
  }

  initData() {
    console.log(" BestellungenHeuteComponent -> initData()");

    this.orders = [];
    this.ordersCount = 0;

    //orders
    this.bestellungenService.getAllOrder;
    this.orders = this.bestellungenService.ordersToday;
    this.ordersCount = Object.keys(this.orders).length;
    console.log(" BestellungenHeuteComponent -> Orders today:");
    console.log(this.orders);

    //quantities

    this.calcService.getQuantityToday(this.orders);

    this.w2BCount = this.calcService.w2BCount.value();
    this.w5BCount = this.calcService.w5BCount.value();
    this.w15BCount = this.calcService.w15BCount.value();
    this.wlCount = this.calcService.wlCount.value();
    this.wTotalCount = this.calcService.wTotalCount.value();

    this.c2BCount = this.calcService.c2BCount.value();
    this.c5BCount = this.calcService.c5BCount.value();
    this.c15BCount = this.calcService.c15BCount.value();
    this.clCount = this.calcService.clCount.value();
    this.cTotalCount = this.calcService.cTotalCount.value();

    console.log('wTotalCount (kg):' + this.wTotalCount);

  }

  resetData() {
    console.log(" BestellungenHeuteComponent -> resetData()");
    this.orders = [];
    this.ordersCount = 0;
    this.w2BCount = 0;
    this.w5BCount = 0;
    this.w15BCount = 0;
    this.wlCount = 0;
    this.wTotalCount = 0;
    this.c2BCount = 0;
    this.c5BCount = 0;
    this.c15BCount = 0;
    this.clCount = 0;
    this.cTotalCount = 0;
  }


  expandAll() {
    if (!this.isExpanded) {
      this.orders.forEach((order: { addressName: string | number; }) => order && order.addressName ? this.expandedRows[order.addressName] = true : '');

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

 
  ngOnDestroy() {
    console.log(" BestellungenHeuteComponent -> ngOnDestroy()");
    this.resetData();
  }
 

}


