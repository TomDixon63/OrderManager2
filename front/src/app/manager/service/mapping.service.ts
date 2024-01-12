import { Injectable } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { BackendService } from './backend.service';
import { Order } from 'src/app/model/order';
import { Position } from 'src/app/model/position';


@Injectable({
  providedIn: 'root'
})
export class Mappingservice {

  ordersToday: Order[] = [];
  ordersAll: Order[] = [];

  constructor(private backendService: BackendService) {
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

  //map response to Order
  //only "Lieferschein"  (LI)
  //only today and future dates

  public response2OrderMapper(response: any) {
    let lieferschein: string = "LI";
    let today = new Date();

    this.ordersToday = [];
    this.ordersAll = [];

    for (const key in response.objects) {
      if (Object.prototype.hasOwnProperty.call(response.objects, key)) {

        let element = response.objects[key];
        let orderType = element["orderType"];

        if (orderType === lieferschein) {
          let deliveryTerms: string = element["deliveryTerms"];
          if (deliveryTerms === "" || deliveryTerms === null) {
            //do nothing
          } else {
           // console.log("deliveryTerms: " + deliveryTerms);
            let deliveryDate: Date = this.string2Date(deliveryTerms);
            console.log("deliveryDate: " + deliveryDate + "  today: " + today);

            //all
            if ((deliveryDate.getMonth() >= today.getMonth()) && (deliveryDate.getDate() >= today.getDate())) {
              this.ordersAll.push(this.mapElement2Order(element));
            }

            //today
            if ((deliveryDate.getMonth() === today.getMonth()) && (deliveryDate.getDate() === today.getDate())) {
              this.ordersToday.push(this.mapElement2Order(element));

            }
          }
        }
      }
    }
  }

  // map an (object) element to Order incl. Positions
  public mapElement2Order(element: any) {

    let order: Order = new Order();

    order.id = element["id"];
    order.orderNumber = element["orderNumber"];
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

  //--------------------------------------------------- Utilities

  // create a Date from a string
  public string2Date(dateString: string) {
    var dataSplit = dateString.split('.');
    var day: number = Number(dataSplit[0]);
    var month: number = Number(dataSplit[1]);
    var year: number = Number(dataSplit[2]);

    //new Date(year, monthIndex, day) monthIndex starts with 0, e.q. january = 0
    var dateConverted: Date = new Date(year, month - 1, day);
    return dateConverted;
  }

}
