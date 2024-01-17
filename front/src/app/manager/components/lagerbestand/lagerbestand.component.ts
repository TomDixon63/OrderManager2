import { LagerBestandService } from './../../service/lagerbestand.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import bestandData from "./lagerbestand.json"


@Component({
  selector: 'app-lagerbestand',
  templateUrl: './lagerbestand.component.html',
  styleUrls: ['./lagerbestand.component.scss']
})
export class LagerbestandComponent implements OnInit, OnDestroy {

  constructor(private lagerbestandService: LagerBestandService) { }

  ngOnInit(): void {
    console.log(bestandData);
  }

  ngOnDestroy() {

  }

}
