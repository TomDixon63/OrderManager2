import { BackendService } from './../../service/backend.service';
import { Mappingservice } from './../../service/mapping.service';

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

  heute: Date;
  
  orders: Order[] = [];
  ordersCount = 0;

  loading: boolean = true;
  expandedRows: expandedRows = {};
  isExpanded: boolean = false;


  constructor(private bestellungenService: BestellungenService) {
  }

  ngOnInit() {
    this.bestellungenService.getAllOrder();
    this.orders = this.bestellungenService.ordersToday;
    this.ordersCount = Object.keys(this.orders).length;
    this.heute = this.bestellungenService.heute;
    this.loading = false;
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
    this.orders = [];
    this.ordersCount = 0;
  }


}


