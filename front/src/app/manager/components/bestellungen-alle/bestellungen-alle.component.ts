import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/model/order';
import { BestellungenService } from './../../service/bestellungen.service';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-bestellungen-alle',
  templateUrl: './bestellungen-alle.component.html',
  styleUrls: ['./bestellungen-alle.component.scss']
})
export class BestellungenAlleComponent implements OnInit, OnDestroy {

  orders: Order[] = [];
  ordersCount = 0;

  loading: boolean = true;
  expandedRows: expandedRows = {};
  isExpanded: boolean = false;


  constructor(private bestellungenService: BestellungenService) {
  }

  ngOnInit() {
    this.bestellungenService.getAllOrder();
    this.orders = this.bestellungenService.ordersAll;
    this.ordersCount = Object.keys(this.orders).length;
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

  }

}
