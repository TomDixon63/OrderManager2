import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilityService } from '../../service/utility.service';
import { Message, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-lagerbestand',
  templateUrl: './lagerbestand.component.html',
  styleUrls: ['./lagerbestand.component.scss'],
  providers: [MessageService]
})

export class LagerbestandComponent implements OnInit {

  last_update: string = '';


  msgs: Message[] = [];

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


  constructor(private http: HttpClient, private utilityService: UtilityService, private messageservice: MessageService) { }

  ngOnInit() {
    console.log("LagerbestandComponent ->  ngOnInit()");
    this.getBestand();
    // console.log(this.form);
    console.log(this.utilityService.today);

  }

  save() {
    console.log("LagerbestandComponent ->  save()");
    this.writeBestand();
    // console.log(this.form);
    this.showSuccessViaMessages();
  }

  getBestand() {
    console.log("LagerbestandComponent ->  getBestand()");
  //  let url: string = 'http://localhost:5000/getbestand';
    this.http.get<any>(environment.nodeserverget).subscribe(data => {
      console.log(data);
      this.mapResponseGet(data);
      // this.form.value = data;
    });
  }

  writeBestand() {
    console.log("LagerbestandComponent ->  writeBestand()");
    // console.log(JSON.stringify(this.form.value));
    // console.log(this.form.controls['w2BCount'].value);

   // let url: string = 'http://localhost:5000/postbestand';

    //change datetime last_update and this.form.lastupdate
    let dateTime = this.utilityService.todayString;

    this.form.patchValue({ lastupdate: dateTime });
    this.last_update = dateTime;
   
   // console.log( dateTime);
   // console.log('last_update: ' + this.last_update);
   // console.log('form lastupdate: ' + this.form.controls["lastupdate"].value);


    this.http.post<any>(environment.nodeserverpost, this.form.value).subscribe(data => {
      console.log(data);
    });

  }


  private mapResponseGet(response: any) {
    console.log("LagerbestandComponent ->  mapResponseGet()");
    for (const key in response) {
      if (Object.prototype.hasOwnProperty.call(response, key)) {
        let value = response[key];
        if (key === 'w2BCount') {
          this.form.controls["w2BCount"].setValue(value);
        }
        if (key === 'w5BCount') {
          this.form.controls["w5BCount"].setValue(value);
        }
        if (key === 'w15BCount') {
          this.form.controls["w15BCount"].setValue(value);
        }
        if (key === 'wlCount') {
          this.form.controls["wlCount"].setValue(value);
        }
        if (key === 'c2BCount') {
          this.form.controls["c2BCount"].setValue(value);
        }
        if (key === 'c5BCount') {
          this.form.controls["c5BCount"].setValue(value);
        }
        if (key === 'c15BCount') {
          this.form.controls["c15BCount"].setValue(value);
        }
        if (key === 'clCount') {
          this.form.controls["clCount"].setValue(value);
        }
        if (key === 'lastupdate') {
          this.form.controls["lastupdate"].setValue(value);
        }
      }
      this.last_update = this.form.controls["lastupdate"].value;
    }
  }

  showSuccessViaMessages() {
    console.log("LagerbestandComponent ->  showSuccessViaMessages()");
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Bestand gespeichert!', detail: '' });
  }

  resetForm() {
    this.form.reset();
  }

}
