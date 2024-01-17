import { Injectable } from '@angular/core';
import { Temporal } from '@js-temporal/polyfill';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    
    today: Temporal.PlainDateTime;
    todayString: string;

    tommorow: Temporal.PlainDateTime;

    constructor() {
        this.today= Temporal.Now.plainDateTimeISO();
        this.todayString = this.todayString;
        this.tommorow =  this.today.add({ days: 1 });
    }

    // create a Date from a string
  public string2Temporal(dateString: string) {
    var dataSplit = dateString.split('.');
    var day: number = Number(dataSplit[0]);
    var month: number = Number(dataSplit[1]);
    var year: number = Number(dataSplit[2]);
  
    var dateConverted = Temporal.PlainDate.from({ year: year, month: month, day: day });
    return dateConverted;
  }

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


    // ----------------------------------------------------------------  Date

    testDate() {

        //this.today= Temporal.Now.plainDateTimeISO();
        //this.tommorow =  this.today.add({ days: 1 });

        const isTommorow: boolean = Temporal.PlainDateTime.compare(this.tommorow, this.today) > 0;

        console.log(this.today.toString());
        console.log(this.tommorow.toString())
        console.log(isTommorow)
/*
        const adateInFuture = Temporal.PlainDate.from({ year: 2024, month: 8, day: 24 });
        console.log(adateInFuture.toString());

        const compareresult1 = Temporal.PlainDate.compare(adateInFuture, today) // 1 groesser
        console.log(compareresult1)

        const compareresult2 = Temporal.PlainDate.compare(today, adateInFuture) // -1, kleiner
        console.log(compareresult2)

        const anothertoday: Temporal.PlainDateTime = Temporal.Now.plainDateTimeISO();

        const compareresult3 = Temporal.PlainDate.compare(today, anothertoday) // 0 , gleich
        console.log(compareresult3)
*/
    }

}