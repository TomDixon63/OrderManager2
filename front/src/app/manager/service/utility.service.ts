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
    this.todayString = this.today.toLocaleDateString();

    this.tommorow = new Date(this.today.getTime() + 86400000); // + 1 day in ms
    this.tommorowString = this.tommorow.toLocaleDateString();

    this.aftertommorow = new Date(this.today.getTime() + 86400000 + 86400000); // + 2 day in ms
    this.aftertommorowString = this.aftertommorow.toLocaleDateString();
    //  console.log(this.today);
    //  console.log(this.tommorow);
    //  console.log(this.aftertommorow);
  }

  //  Convert a "dd.MM.yyyy" string into a Date object
  convertStringToDate(dateString) {
    let d = dateString.split(".");
    let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
    return dat;     
}

}