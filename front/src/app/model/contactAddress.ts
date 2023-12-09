//ContactAddress

export class ContactAddress {
    public id: string;
    public contactId: string;
    public street: string;
    public zip: string;
    public city: string;
    public country: string;
    public additionalInformation: string;
   
    constructor() { }

/*
{"objects": [
    {
    "id": "42713244",
    "objectName": "ContactAddress",
    "additionalInformation": null,
    "create": "2022-10-12T15:13:43+02:00",
    "update": "2022-10-12T15:13:43+02:00",
    "contact":       {
       "id": "53420059",
       "objectName": "Contact"
    },
    "street": "Deutz-Mülheimer Str. 204",
    "zip": "51063",
    "city": "Köln",
    "country":       {
       "id": "1",
       "objectName": "StaticCountry"
    },
    "category":       {
       "id": "47",
       "objectName": "Category"
    },
    "name": null,
    "sevClient":       {
       "id": "692471",
       "objectName": "SevClient"
    }
 },
 */
}