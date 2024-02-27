

import { UtilityService } from './utility.service';
import { Injectable } from '@angular/core';
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

  // ------------------------------------------------------------------- Order and Invoice to Order mappings  

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
    // console.log(response);

    let lieferschein: string = "LI";
   // let auftragsbestaetigung = "AB";

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
        //console.log(deliveryTerms);

        let deliveryTermsDate: Date = this.utilityService.convertStringToDate(deliveryTerms);
      
        // console.log('------------------');
        // console.log(deliveryTermsDate);
        // console.log(today);
        // console.log(tommorow);
        // console.log(aftertommorow);
        //  console.log('------------------');

        let order: Order = this.mapElement2Order(element);

        if (deliveryTermsDate.valueOf() === today.valueOf()) {
          if (orderType == lieferschein) {
            this.ordersToday.push(order);
            this.ordersAll.push(order);
          }

        }

        if (deliveryTermsDate.valueOf() === tommorow.valueOf()) {
        //  if (orderType == lieferschein) {
            this.ordersTommorow.push(order);
            this.ordersAll.push(order);
        //  }
        }

        if (deliveryTermsDate.valueOf() === aftertommorow.valueOf()) {
        //  if (orderType == lieferschein) {
            this.ordersAfterTommorow.push(order);
            this.ordersAll.push(order);
        //  }
        }

        if (deliveryTermsDate.valueOf() > aftertommorow.valueOf()) {
          this.ordersAll.push(order); //LI und AB
        }

      }

    }

  }

  //map Invoice response to Order
  public invoiceResponse2OrderMapper(response: any) {
   // console.log(" Mappingservice -> invoiceResponse2OrderMapper()");

    let today: Date = this.utilityService.today;
    let tommorow: Date = this.utilityService.tommorow;
    let aftertommorow: Date = this.utilityService.aftertommorow;

    let rechnung: string = "RE";


    for (const key in response.objects) {
      if (Object.prototype.hasOwnProperty.call(response.objects, key)) {
        let element = response.objects[key];

        // "invoiceType": "RE"
        let invoiceType = element["invoiceType"];

        //"deliveryDate": "2024-02-21T00:00:00+01:00"
        let deliveryDate: string = element["deliveryDate"];

        let deliveryDateDate: Date;

        if (deliveryDate != null) {
          deliveryDateDate = this.utilityService.convertInvoiceStringDateToDate(deliveryDate);
           console.log(invoiceType);
         console.log(deliveryDateDate);
        }

        if (invoiceType === rechnung && deliveryDate != null) {

          let order: Order = this.mapInvoiceElement2Order(element);
          //console.log (order);

          if (deliveryDateDate.valueOf() === today.valueOf()) {
            this.ordersToday.push(order);
            this.ordersAll.push(order);
          }

          
        if (deliveryDateDate.valueOf() === tommorow.valueOf()) {
              this.ordersTommorow.push(order);
              this.ordersAll.push(order);
          }
  
          if (deliveryDateDate.valueOf() === aftertommorow.valueOf()) {
              this.ordersAfterTommorow.push(order);
              this.ordersAll.push(order);
          }
  
          if (deliveryDateDate.valueOf() > aftertommorow.valueOf()) {
            this.ordersAll.push(order); //LI und AB
          }

        }
      }


    }
  }

  // map Invoice to Order
  public mapInvoiceElement2Order(element:any) {

    let order: Order = new Order();

    order.id = element["id"];
    order.orderNumber = element["invoiceNumber"];
    order.deliveryTerms = element["payDate"];
    order.addressName = element["addressName"];
    order.address = element["address"];
    order.status = element["status"];
    order.orderType = element["invoiceType"];

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
    //console.log(order);
    //console.log(positions);

    order.positions = positions;

    return order;
  }



}
