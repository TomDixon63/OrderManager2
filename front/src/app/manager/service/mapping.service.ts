

import { UtilityService } from './utility.service';
import { Injectable } from '@angular/core';
import { Temporal } from '@js-temporal/polyfill';
import { Contact } from 'src/app/model/contact';
import { Order } from 'src/app/model/order';
import { Position } from 'src/app/model/position';


@Injectable({
  providedIn: 'root'
})
export class Mappingservice {
  ordersToday: Order[] = [];
  ordersTommorow: Order[] = [];
  ordersAfterTommorow: Order[] = [];
  ordersAll: Order[] = [];

  constructor(private utilityService: UtilityService) {

  }

  // ----------------------------------------------------------------  Contact mappings
  public response2ContactsMapper(response: any) {
    let contacts: Contact[] = [];
    for (const key in response.objects) {
      if (Object.prototype.hasOwnProperty.call(response.objects, key)) {
        let element = response.objects[key];
        contacts.push(this.mapElement2Contact(element));
      }
    }
    return contacts;
  }

  // map an (object) element to Contact
  private mapElement2Contact(element: any) {
    let contact: Contact = new Contact();
    contact.id = element["id"];
    contact.name = element["name"];
    contact.customerNumber = element["customerNumber"];
    contact.description = element["description"];
    contact.address1 = element.addresses[0].street + " - " + element.addresses[0].zip + " " + element.addresses[0].city;
    return contact;
  }

  // ------------------------------------------------------------------- Order mappings  

  // map an (object) element to Order incl. Positions
  public mapElement2Order(element: any) {

    let order: Order = new Order();

    order.id = element["id"];
    order.orderNumber = element["orderNumber"];
    order.address = element["address"];
    order.addressName = element["addressName"];
    order.deliveryTerms = element["deliveryTerms"];
    order.status = element["status"];
    order.orderType = element["orderType"];

    let positions: Position[] = [];

    let temp_positions = element["positions"];

    for (var index in temp_positions) {
      //console.log(temp_positions[index]);
      let temp_position = temp_positions[index];
      let position = new Position();
      position.id = temp_position.positionNumber;
      position.positionNumber = +temp_position.positionNumber + 1;
      position.name = temp_position.name;
      position.quantity = temp_position.quantity;
      position.text = temp_position.text;
      position.status = temp_position.status;
      positions.push(position);
    }
    //console.log(positions);
    order.positions = positions;

    return order;
  }



  //map response to Order
  //only "Lieferschein"  (LI)
  //only today and future dates
  //order date format is 2024-02-13T21:35:23+01:00 

  public response2OrderMapper(response: any) {
    console.log(" Mappingservice -> response2OrderMapper()");
    console.log(response);

    let lieferschein: string = "LI";
    let auftragsbestaetigung = "AB";

    this.ordersToday = [];
    this.ordersTommorow = [];
    this.ordersAfterTommorow = []
    this.ordersAll = [];

    let today: Date = this.utilityService.today;
    let tommorow: Date = this.utilityService.tommorow;
    let aftertommorow: Date = this.utilityService.aftertommorow;

    for (const key in response.objects) {
      if (Object.prototype.hasOwnProperty.call(response.objects, key)) {
        let element = response.objects[key];
        let orderType = element["orderType"];
        let deliveryTerms: string = element["deliveryTerms"];
        let addressName = element["addressName"];
        //console.log(deliveryTerms);

        let deliveryTermsDate: Date = this.utilityService.convertStringToDate(deliveryTerms);
        // console.log(deliveryTermsDate);

        if (deliveryTermsDate.getDate() === today.getDate()) {
          if (orderType == lieferschein) {
            this.ordersToday.push(this.mapElement2Order(element));
            this.ordersAll.push(this.mapElement2Order(element));
          }

        }

        if (deliveryTermsDate.getDate() === tommorow.getDate()) {
          if (orderType == lieferschein) {
            this.ordersTommorow.push(this.mapElement2Order(element));
            this.ordersAll.push(this.mapElement2Order(element));
          }
        }

        if (deliveryTermsDate.getDate() === aftertommorow.getDate()) {
          if (orderType == lieferschein) {
           this.ordersAfterTommorow.push(this.mapElement2Order(element));
            this.ordersAll.push(this.mapElement2Order(element));
          }
        }
/*
        if (deliveryTermsDate.getDate() > aftertommorow.getDate()) {
          this.ordersAll.push(this.mapElement2Order(element));
        }
        */
      }

    }



    /*
        for (const key in response.objects) {
          if (Object.prototype.hasOwnProperty.call(response.objects, key)) {
    
            let element = response.objects[key];
            let orderType = element["orderType"];
    
            if (orderType == lieferschein ) {
            
              let deliveryTerms: string = element["deliveryTerms"];
              if (deliveryTerms === "" || deliveryTerms === null) {
                //do nothing
              } else {
               // console.log("deliveryTerms: " + deliveryTerms);
                //let deliveryDate: Date = this.string2Date(deliveryTerms);
                let deliveryDate = this.utilityService.string2Temporal(deliveryTerms);
               // console.log("deliveryDate: " + deliveryDate.toString());
    
                //all
                if ((Temporal.PlainDate.compare(deliveryDate, today) == 0) || (Temporal.PlainDate.compare(deliveryDate, today) == 1)) {
                  this.ordersAll.push(this.mapElement2Order(element));
                }
    
                //today
                if (Temporal.PlainDate.compare(deliveryDate, today) == 0) {
                  this.ordersToday.push(this.mapElement2Order(element));
                }
    
                //tommorow
                if (Temporal.PlainDate.compare(deliveryDate, tommorow) == 0) {
                  this.ordersTommorow.push(this.mapElement2Order(element));
                }
    
                //aftertommorow
                if (Temporal.PlainDate.compare(deliveryDate, aftertommorow) == 0) {
                  this.ordersAfterTommorow.push(this.mapElement2Order(element));
                }
    
    
              }
            }
          }
        }
      }
    */
  }
}
