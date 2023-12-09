import { Injectable } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactAddress } from 'src/app/model/contactAddress';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class Mappingservice {

  constructor(private backendService: BackendService) {
  }


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
    contact.description =  element["description"];
    //contact.address1 = element["addresses[0].street"] + " - " + element["addresses[0].zip"] + " " + element["addresses[0].city"];  
   // contact.address1 = element["addresses[0].street"]; 
    contact.address1 = element.addresses[0].street + " - " +element.addresses[0].zip + " " +element.addresses[0].city; 
    return contact;  
    
    /*
    this.backendService.getAllContactAddressesForContact(contact.customerNumber).subscribe((response: any) => {
      console.log("getAllContactAdressesForAcontact() -> ");
      console.log(response);   
      const responseAsString: string = JSON.stringify(response);
      if (responseAsString.includes("Error")) {
        //todo alert implementieren
        //this.alertService.warn(responseAsString);
        console.log("getAllContactAdressesForAcontact() -> Error ")
      } else {
        console.log(responseAsString);
       let element = response.objects;
       contact.address1 = element["street"] + " - " + element["zip"] + " " + element["city"];    
       
       
      }


    });
    */


   
  }
}
