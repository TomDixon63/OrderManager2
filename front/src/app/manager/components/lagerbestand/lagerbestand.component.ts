import { LagerBestandService } from './../../service/lagerbestand.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lagerbestand',
  templateUrl: './lagerbestand.component.html',
  styleUrls: ['./lagerbestand.component.scss']
})
export class LagerbestandComponent implements OnInit {

  
  //bags:
  w2BCount: number = 0;
  w5BCount: number = 0;
  w15BCount: number = 0;
  //kg:
  wlCount: number = 0;

  //bags:
  c2BCount: number = 0;
  c5BCount: number = 0;
  c15BCount: number = 0;
  //kg:
  clCount: number = 0;

  

  constructor(private lagerbestandService: LagerBestandService, private http: HttpClient) {
    
  }

  ngOnInit() {
    console.log("LagerbestandComponent ->  ngOnInit()");
    this.readFile();
  }


  readFile() {
    console.log("LagerbestandComponent ->  readFile()");

    const url: string = '/assets/lagerbestand.json';
    this.http.get(url).subscribe((response: any) => {
      console.log(response);
      this.mapResponse(response);
    });
  }


  private mapResponse(response: any) {

    for (const key in response.objects) {
      if (Object.prototype.hasOwnProperty.call(response.objects, key)) {
        let element = response.objects[key];

        switch (element["id"]) {
          case '1':
            this.w2BCount = element["value"];
            break;
          case '2':
            this.w5BCount = element["value"];
            break;
          case '3':
            this.w15BCount = element["value"];
            break;
          case '4':
            this.wlCount = element["value"];
            break;
          case '5':
            this.c2BCount = element["value"];
            break;
          case '6':
            this.c5BCount = element["value"];
            break;
          case '7':
            this.c15BCount = element["value"];
            break;
          case '8':
            this.clCount = element["value"];
            break;
          default:
            break;
        }
      }
    }

  }

 }
