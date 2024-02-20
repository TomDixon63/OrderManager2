import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Startseite', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            }, 
            {
                items: [
                    {
                        label: 'Bestellungen heute', icon: 'pi pi-fw pi-chevron-right', routerLink: ['/bestellungen-heute']
                    },
                    {
                        label: 'Bestellungen morgen', icon: 'pi pi-fw pi-chevron-right', routerLink: ['/bestellungen-morgen']
                    },
                    {
                        label: 'Bestellungen übermorgen', icon: 'pi pi-fw pi-chevron-right', routerLink: ['/bestellungen-uebermorgen']
                    },
                    {
                        label: 'Bestellungen alle',  icon: 'pi pi-fw pi-chevron-right', routerLink: ['/bestellungen-alle']
                    }
                   
                ]
            },
            {
                items: [
                    {
                        label: 'Lagerbestand', icon: 'pi pi-fw pi-bars', routerLink: ['/lagerbestand']
                    }
                   
                ]
            },
           
        ];
    }
}
