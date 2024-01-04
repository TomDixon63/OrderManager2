import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { BackendService } from '../../service/backend.service';
import { Mappingservice } from '../../service/mapping.service';

@Component({
  selector: 'app-bestellungen',
  templateUrl: './bestellungen.component.html',
  styleUrls: ['./bestellungen.component.scss']
})
export class BestellungenComponent implements OnInit {

   // array of contacts from api service
   orders: Order[] = [];
   orderCount = 0;
   loading: boolean = true;
  
 
   constructor(private backendService: BackendService, private mappingService: Mappingservice) {
   }
 
   ngOnInit() {
     this.getAllOrder();
     this.loading = false;
   }

   public getAllOrder(){
    this.backendService.getAllOrder().subscribe((response) => {
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
}
