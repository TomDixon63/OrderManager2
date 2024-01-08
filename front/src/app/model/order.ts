// Order (Bestellung)

import { Position } from "./position";

export class Order {

    public id: string;
    public orderNumber: string;
    public addressName: string;
    public deliveryTerms: string; //Lieferdatum
    public status: string;
    public orderType: string; 

    public positions: Position[];

    constructor() { }

    /*
{
  "objects": [
    {
      "id": "14456802",
      "objectName": "Order",
      "additionalInformation": null,
      "create": "2023-12-13T15:48:07+01:00",
      "update": "2023-12-13T18:40:54+01:00",
      "orderNumber": "Vinaturel GmbH AN-1021",
      "contact": {
        "id": "70003259",
        "objectName": "Contact"
      },
      "orderDate": "2023-12-13T00:00:00+01:00",
      "status": "200",
      "header": "Angebot AN-1021",
      "headText": "<p>    Sehr geehrte Damen und Herren,</p><p>    vielen Dank für Ihre Anfrage. Gerne unterbreiten wir Ihnen das gewünschte freibleibende Angebot:</p>",
      "footText": "<p>    Für Rückfragen stehen wir Ihnen jederzeit gerne zur Verfügung.<br>    Wir bedanken uns sehr für Ihr Vertrauen.</p><p>    Mit freundlichen Grüßen<br>    [%KONTAKTPERSON%]</p>",
      "addressName": "Vinaturel GmbH",
      "addressStreet": null,
      "addressZip": null,
      "addressCity": null,
      "addressCountry": {
        "id": "1",
        "objectName": "StaticCountry"
      },
      "createUser": {
        "id": "844144",
        "objectName": "SevUser"
      },
      "sevClient": {
        "id": "692471",
        "objectName": "SevClient"
      },
      "deliveryTerms": null,
      "paymentTerms": null,
      "version": "0",
      "smallSettlement": "0",
      "contactPerson": {
        "id": "844144",
        "objectName": "SevUser"
      },
      "taxRate": "0",
      "taxText": "0",
      "addressParentName": null,
      "taxType": "default",
      "orderType": "AN",
      "sendDate": "2023-12-13T18:40:54+01:00",
      "addressParentName2": null,
      "addressName2": null,
      "addressGender": null,
      "address": "Vinaturel GmbH\nSchatzlgasse 30\n82335 Berg",
      "currency": "EUR",
      "sumNet": "260",
      "sumTax": "49.4",
      "sumGross": "309.4",
      "sumDiscounts": "0",
      "sumNetForeignCurrency": "0",
      "sumTaxForeignCurrency": "0",
      "sumGrossForeignCurrency": "0",
      "sumDiscountsForeignCurrency": "0",
      "weight": "0",
      "customerInternalNote": null,
      "showNet": "1",
      "sendType": "VPDF",
      "sumDiscountNet": "0",
      "sumDiscountGross": "0",
      "sumDiscountNetForeignCurrency": "0",
      "sumDiscountGrossForeignCurrency": "0",
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
        {
          "id": "68190686",
          "objectName": "OrderPos",
          "additionalInformation": null,
          "create": "2023-12-13T15:48:07+01:00",
          "update": "2023-12-13T18:40:47+01:00",
          "order": {
            "id": "14456802",
            "objectName": "Order"
          },
          "part": {
            "id": "22828473",
            "objectName": "Part"
          },
          "quantity": "5",
          "price": "0",
          "priceNet": "0",
          "priceTax": "0",
          "priceGross": "0",
          "name": "incl. EPP Box Bereitstellung",
          "priority": "100",
          "unity": {
            "id": "1",
            "objectName": "Unity"
          },
          "sevClient": {
            "id": "692471",
            "objectName": "SevClient"
          },
          "positionNumber": "1",
          "text": "",
          "discount": "0",
          "isPercentage": "1",
          "discountedValue": null,
          "optional": "0",
          "optionalChargeable": "0",
          "taxRate": "19",
          "sumNet": "0",
          "sumGross": "0",
          "sumTax": "0",
          "sumDiscount": "0",
          "sumNetForeignCurrency": "0",
          "sumTaxForeignCurrency": "0",
          "sumGrossForeignCurrency": "0",
          "sumDiscountForeignCurrency": "0",
          "createNextPart": null
        },
      
     
      ]
    },
   
  */
}

