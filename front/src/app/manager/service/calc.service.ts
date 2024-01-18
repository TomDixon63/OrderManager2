import { Injectable } from '@angular/core';
import { ProductsEnum } from '../../model/enums';
import { Position } from 'src/app/model/position';
import { Order } from 'src/app/model/order';

@Injectable({
    providedIn: 'root'
})
export class CalcService {

    number = require('numeral');

    /*
    W2B = '2-Kg-Beutel-Würfeleis',
    W5B = '5-Kg-Beutel-Würfeleis',
    W15B = '15-Kg-Beutel-Würfeleis',
    WL = 'Würfeleis',
    C2B = "2-Kg-Beutel-Crushed-Eis",
    C5B = '5-Kg-Beutel-Crushed-Eis',
    C15B = '15-Kg-Beutel-Crushed-Eis',
    CL = 'Crushed-Eis'
    */

    //bags:
    w2BCount = this.number(0);
    w5BCount = this.number(0);
    w15BCount = this.number(0);
    //kg:
    wlCount = this.number(0);
    wTotalCount = this.number(0);

    //bags:
    c2BCount = this.number(0);
    c5BCount = this.number(0);
    c15BCount = this.number(0);

    //kg:
    clCount = this.number(0);
    cTotalCount = this.number(0);


    public getQuantityToday(orders: Order[]) {
        console.log(" CalcService -> getQuantityToday()");
        this.resetData();

        if (orders.length == 0) return;

        let positions: Position[] = [];

        // Order Positions -> positions
        for (var i in orders) {
            let order: Order = orders[i];
            let orderpositions: Position[] = order.positions;

            for (var k in orderpositions) {
                let orderposition: Position = orderpositions[k];
                positions.push(orderposition);
            }
        }

        console.log(positions);

        // Calculation
        for (var index in positions) {

            let p: Position;

            p = positions[index];

            let name: string = p.name;

            if (name === ProductsEnum.W2B) {
                this.w2BCount = this.w2BCount.add(p.quantity);
                let q = p.quantity * 2;
                this.wTotalCount = this.wTotalCount.add(q);
            }

            if (name === ProductsEnum.W5B) {
                this.w5BCount = this.w5BCount.add(p.quantity);
                let q = p.quantity * 5;
                this.wTotalCount = this.wTotalCount.add(q);
            }

            if (name === ProductsEnum.W15B) {
                this.w15BCount = this.w15BCount.add(p.quantity);
                let q = p.quantity * 15;
                this.wTotalCount = this.wTotalCount.add(q);
            }

            if (name === ProductsEnum.WL) {
                this.wlCount = this.wlCount.add(p.quantity);
                this.wTotalCount = this.wTotalCount.add(p.quantity);
            }

            if (name === ProductsEnum.C2B) {
                this.c2BCount = this.c2BCount.add(p.quantity);
                let q = p.quantity * 2;
                this.cTotalCount = this.cTotalCount.add(q);
            }

            if (name === ProductsEnum.C5B) {
                this.c5BCount = this.c5BCount.add(p.quantity);
                let q = p.quantity * 5;
                this.cTotalCount = this.cTotalCount.add(q);
            }

            if (name === ProductsEnum.C15B) {
                this.c15BCount = this.c15BCount.add(p.quantity);
                let q = p.quantity * 15;
                this.cTotalCount = this.cTotalCount.add(q);
            }

            if (name === ProductsEnum.CL) {
                this.clCount = this.clCount.add(p.quantity);
                this.cTotalCount = this.cTotalCount.add(p.quantity);
            }
           

        }
    }

    resetData(){
        console.log(" CalcService -> resetData()");
        this.w2BCount = this.number(0);
        this.w5BCount = this.number(0);
        this.w15BCount = this.number(0);
        //kg:
        this.wlCount = this.number(0);
        this.wTotalCount = this.number(0);
    
        //bags:
        this.c2BCount = this.number(0);
        this.c5BCount = this.number(0);
        this.c15BCount = this.number(0);
    
        //kg:
        this.clCount = this.number(0);
        this.cTotalCount = this.number(0);

    }

}
