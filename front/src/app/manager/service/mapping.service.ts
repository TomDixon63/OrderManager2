import { Injectable } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { BackendService } from './backend.service';
import { Order } from 'src/app/model/order';
import { Position } from 'src/app/model/position';

@Injectable({
  providedIn: 'root'
})
export class Mappingservice {

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

  public response2OrderMapper(response: any) {
    let orders: Order[] = [];
    for (const key in response.objects) {
      if (Object.prototype.hasOwnProperty.call(response.objects, key)) {
        let element = response.objects[key];
        orders.push(this.mapElement2Order(element));
      }
    }

    return orders;
  }

  // map an (object) element to Order incl. Positions
  private mapElement2Order(element: any) {
    let order: Order = new Order();
    order.id = element["id"];
    order.orderNumber = element["orderNumber"];
    order.addressName = element["addressName"];
    order.deliveryTerms = element["deliveryTerms"];
    order.status = element["status"];
    order.orderType = element["orderTypeorderType"];

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


}
