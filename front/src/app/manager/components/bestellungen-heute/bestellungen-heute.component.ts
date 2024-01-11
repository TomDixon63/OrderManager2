import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { BackendService } from '../../service/backend.service';
import { Mappingservice } from '../../service/mapping.service';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-bestellungen-heute',
  templateUrl: './bestellungen-heute.component.html',
  styleUrls: ['./bestellungen-heute.component.scss']
})
export class BestellungenHeuteComponent implements OnInit {

   //current: Date = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
  //followingDay: Date = new Date(this.current.getTime() + 86400000); // + 1 day in ms


  heute: Date = new Date();
  morgen: Date = new Date(this.heute.getTime() + 86400000); // + 1 day in ms
  uebermorgen: Date = new Date(this.morgen.getTime() + 86400000); // + 1 day in ms

  ordersToday: Order[] = [];
  ordersTodayCount = 0;

  ordersAll: Order[] = [];
  ordersAllCount = 0;

  loading: boolean = true;
  expandedRows: expandedRows = {};
  isExpanded: boolean = false;


  constructor(private backendService: BackendService, private mappingService: Mappingservice) {
  }

  ngOnInit() {
    this.getAllOrder();
    this.loading = false;
  }

  public getAllOrder() {
    this.backendService.getAllOrder().subscribe((response: any) => {
      console.log(response);
      const responseAsString: string = JSON.stringify(response);
      if (responseAsString.includes("Error")) {
        //todo alert implementieren
        //this.alertService.warn(responseAsString);
        console.log("getAllOrder() -> Error ");
      } else {
        this.response2OrderMapper(response);
       
      }
    });

  }

  //map response to Order
  //only "Lieferschein"  (LI)
  //only today and future dates
  public response2OrderMapper(response: any) {
    let lieferschein: string = "LI";
    let today = new Date();

    for (const key in response.objects) {
      if (Object.prototype.hasOwnProperty.call(response.objects, key)) {

        let element = response.objects[key];
        let orderType = element["orderType"];

        if (orderType === lieferschein) {
          let deliveryTerms: string = element["deliveryTerms"];
          if (deliveryTerms === "" || deliveryTerms === null) {
            //do nothing
          } else {
            console.log("deliveryTerms: " + deliveryTerms);
            let deliveryDate: Date = this.mappingService.string2Date(deliveryTerms);
            console.log("deliveryDate: " + deliveryDate + "  today: " + today);

            //  if (deliveryDate.getTime() >= today.getTime()){
            if ((deliveryDate.getMonth() === today.getMonth()) && (deliveryDate.getDate() === today.getDate())) {

              this.ordersToday.push(this.mappingService.mapElement2Order(element));
              this.ordersAll.push(this.mappingService.mapElement2Order(element));
            }
          }

          this.ordersTodayCount = Object.keys(this.ordersToday).length;
          this.ordersAllCount = Object.keys(this.ordersAll).length;
        }
      }
    }
  }

  expandAll() {
    if (!this.isExpanded) {
      this.ordersToday.forEach((order: { addressName: string | number; }) => order && order.addressName ? this.expandedRows[order.addressName] = true : '');

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }


}


