import { Injectable } from '@angular/core';
import { Temporal } from '@js-temporal/polyfill';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  today: Date;
  tommorow: Date;
  aftertommorow: Date;

  todayString: string;
  tommorowString: string;
  aftertommorowString: string;

  constructor() {
    console.log("UtilityService ->  constructor()");
    this.today = new Date();
    this.today.setHours(0,0,0,0); // set hours to compare
   
    this.todayString = this.today.toLocaleDateString();

    this.tommorow = new Date(this.today.getTime() + 86400000); // + 1 day in ms
    this.tommorow.setHours(0,0,0,0);
    this.tommorowString = this.tommorow.toLocaleDateString();

    this.aftertommorow = new Date(this.today.getTime() + 86400000 + 86400000); // + 2 day in ms
    this.aftertommorow.setHours(0,0,0,0);
    this.aftertommorowString = this.aftertommorow.toLocaleDateString();
  }

  //  Convert a "dd.MM.yyyy" string into a Date object
  convertStringToDate(dateString) {
    let d = dateString.split(".");
    let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
    dat.setHours(0,0,0,0)
    return dat;     
}

//  Convert a "2024-02-21T16:40:55+01:00" string into a Date object
convertInvoiceStringDateToDate(dateString) {
  let d = dateString.substring(0, 10);
  d.split("-");
  let dat = new Date(d);
  dat.setHours(0,0,0,0)
  return dat;     
}

}