// Position (Bestellposition)

export class Position{

    public id: string;
    public name: string;
    public quantity: number;
    public positionNumber: number;
    public text: string;
    public status: string;
    

    constructor() { }

    /*
"positions": [
        {
          "id": "68190685",
          "objectName": "OrderPos",
          "additionalInformation": null,
          "create": "2023-12-13T15:48:07+01:00",
          "update": "2023-12-13T18:40:47+01:00",
          "order": {
            "id": "14456802",
            "objectName": "Order"
          },
          "part": {
            "id": "21879328",
            "objectName": "Part"
          },
          "quantity": "200",
          "price": "1.3",
          "priceNet": "1.3",
          "priceTax": "0.247",
          "priceGross": "1.547",
          "name": "Würfeleis",
          "priority": "100",
          "unity": {
            "id": "4",
            "objectName": "Unity"
          },
          "sevClient": {
            "id": "692471",
            "objectName": "SevClient"
          },
          "positionNumber": "0",
          "text": "5x 40 Kg Box\nLieferort: SkyKöln, Deutz, 28.Etage.\nLieferzeit: ab 8:00",
          "discount": "0",
          "isPercentage": "1",
          "discountedValue": null,
          "optional": "0",
          "optionalChargeable": "0",
          "taxRate": "19",
          "sumNet": "260",
          "sumGross": "309.4",
          "sumTax": "49.4",
          "sumDiscount": "0",
          "sumNetForeignCurrency": "0",
          "sumTaxForeignCurrency": "0",
          "sumGrossForeignCurrency": "0",
          "sumDiscountForeignCurrency": "0",
          "createNextPart": null
        },
    */

}