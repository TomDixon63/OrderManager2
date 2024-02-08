import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Temporal } from '@js-temporal/polyfill';
import { UtilityService } from '../../service/utility.service';


@Component({
  selector: 'app-lagerbestand',
  templateUrl: './lagerbestand.component.html',
  styleUrls: ['./lagerbestand.component.scss']
})
export class LagerbestandComponent implements OnInit {
 
  last_update: string;

  form = new FormGroup({
    "w2BCount": new FormControl("",),
    "w5BCount": new FormControl("",),
    "w15BCount": new FormControl("",),
    "wlCount": new FormControl("",),
    "c2BCount": new FormControl("",),
    "c5BCount": new FormControl("",),
    "c15BCount": new FormControl("",),
    "clCount": new FormControl("",),
    "lastupdate": new FormControl("",),
  });


  constructor(private http: HttpClient, private utilityService: UtilityService) { }

  ngOnInit() {
    console.log("LagerbestandComponent ->  ngOnInit()");
    this.getBestand();
   // console.log(this.form);
   
  }

  save() {
    console.log("LagerbestandComponent ->  save()");
    this.writeBestand();
   // console.log(this.form);
  }

  getBestand() {
    console.log("LagerbestandComponent ->  getBestand()");
    let url: string = 'http://localhost:5000/getbestand';
    this.http.get<any>(url).subscribe(data => {
      console.log(data);
      this.mapResponseGet(data);
     // this.form.value = data;
    });
  }

  writeBestand() {
    console.log("LagerbestandComponent ->  writeBestand()");
   // console.log(JSON.stringify(this.form.value));
   // console.log(this.form.controls['w2BCount'].value);

    let url: string = 'http://localhost:5000/postbestand';

    //change datetime last_update and this.form.lastupdate
    let now = Temporal.Now.plainDateTimeISO();
    let dateTime = this.utilityService.formatDateFromTemporalString(now.toLocaleString());
   
    this.form.patchValue({ lastupdate:  dateTime });
    this.last_update = dateTime;
   
    this.http.post<any>(url, this.form.value).subscribe(data => {
      console.log(data);
    });
   
  }


  private mapResponseGet(response: any) {
    console.log("LagerbestandComponent ->  mapResponseGet()");
    for (const key in response) {
      if (Object.prototype.hasOwnProperty.call(response, key)) {
        let value = response[key];
        if(key === 'w2BCount') {
         this.form.controls["w2BCount"].setValue(value);
        }
        if(key === 'w5BCount') {
          this.form.controls["w5BCount"].setValue(value);
         }
         if(key === 'w15BCount') {
          this.form.controls["w15BCount"].setValue(value);
         }
         if(key === 'wlCount') {
          this.form.controls["wlCount"].setValue(value);
         }
         if(key === 'c2BCount') {
          this.form.controls["c2BCount"].setValue(value);
         }
         if(key === 'c5BCount') {
          this.form.controls["c5BCount"].setValue(value);
         }
         if(key === 'c15BCount') {
          this.form.controls["c15BCount"].setValue(value);
         }
         if(key === 'clCount') {
          this.form.controls["clCount"].setValue(value);
         }
         if(key === 'lastupdate') {
          this.form.controls["lastupdate"].setValue(value);
         }
      }
      this.last_update =  this.form.controls["lastupdate"].value;
    }
  }

  resetForm() {
    this.form.reset();
  }


}
