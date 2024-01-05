import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { BackendService } from '../../service/backend.service';
import { Mappingservice } from '../../service/mapping.service';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-bestellungen',
  templateUrl: './bestellungen.component.html',
  styleUrls: ['./bestellungen.component.scss']
})
export class BestellungenComponent implements OnInit {

 current: Date = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
 followingDay:Date = new Date(this.current.getTime() + 86400000); // + 1 day in ms


  heute:Date = new Date();
  morgen:Date =  new Date(this.heute.getTime() + 86400000); // + 1 day in ms
  uebermorgen:Date = new Date(this.morgen.getTime() + 86400000); // + 1 day in ms

   orders: Order[] = [];
   orderCount = 0;

   loading: boolean = true;
   expandedRows: expandedRows = {};
   isExpanded: boolean = false;
  
 
   constructor(private backendService: BackendService, private mappingService: Mappingservice) {
   }
 
   ngOnInit() {
     this.getAllOrder();
     this.loading = false;
   }

   public getAllOrder(){
    this.backendService.getAllOrder().subscribe((response: any) => {
      console.log(response);      
      const responseAsString: string = JSON.stringify(response);
      if (responseAsString.includes("Error")) {
        //todo alert implementieren
        //this.alertService.warn(responseAsString);
        console.log("getAllOrder() -> Error ");
      } else {
       this.orders = [];
       this.orders = this.mappingService.response2OrderMapper(response);
       this.orderCount = Object.keys(this.orders).length;
      }
    });

}

expandAll() {
  if (!this.isExpanded) {
      this.orders.forEach((order: { addressName: string | number; }) => order && order.addressName ? this.expandedRows[order.addressName] = true : '');

  } else {
      this.expandedRows = {};
  }
  this.isExpanded = !this.isExpanded;
}


}
