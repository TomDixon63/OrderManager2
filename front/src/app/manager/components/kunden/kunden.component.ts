import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { Table } from 'primeng/table';
import { BackendService } from '../../service/backend.service';
import { Mappingservice } from '../../service/mapping.service';

@Component({
  selector: 'app-kunden',
  templateUrl: './kunden.component.html',
  styleUrls: ['./kunden.component.scss']
})
export class KundenComponent {

  // array of contacts from api service
  contacts: Contact[] = [];
  contactsCount = 0;
  loading: boolean = true;
  @ViewChild('filter') filter!: ElementRef;


  constructor(private backendService: BackendService, private mappingService: Mappingservice) {
  }

  ngOnInit() {
    this.getAllContacts();
    this.loading = false;
  }

  // get all contacts with addresses, and fill table data
  public getAllContacts() {
    this.backendService.getAllContacts().subscribe((response) => {
      console.log(response);      
      const responseAsString: string = JSON.stringify(response);
      if (responseAsString.includes("Error")) {
        //todo alert implementieren
        //this.alertService.warn(responseAsString);
        console.log("getAllContacts() -> Error ")
      } else {
        this.contacts = [];
        this.contacts = this.mappingService.response2ContactsMapper(response);
        this.contactsCount = Object.keys(this.contacts).length;
      }
    });
  }

  /** table handling methods */

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}


