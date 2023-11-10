import { Injectable } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Injectable({
  providedIn: 'root'
})
export class Mappingservice {

  constructor() { }

 
  // map response to contacts[]
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

  // map an (object) element to contact
  private mapElement2Contact(element: any) {
    let contact: Contact = new Contact();
    contact.id = element["id"];
    contact.name = element["name"];
    contact.customerNumber = element["customerNumber"];
    return contact;
  }
}
