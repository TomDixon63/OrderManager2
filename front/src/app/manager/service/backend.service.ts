import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    //todo move to properties file
    // server api
    private baseUrl: string = 'http://127.0.0.1:8080';
    private contacts: string = '/kunden';
    private contactAddress_Endpoint: string = "/ContactAddress";
    private customerNumber: string = "customerNumber";

    private SLASH: string = "/";

    private AND_MARK: string = "&";

    private QUESTION_MARK: string = "?";

    private EQUAL_MARK: string = "=";

    constructor(private http: HttpClient) { }

    // get all contacts (kunden) (max. 1000) with addresses
    // https://my.sevdesk.de/api/v1/Contact?embed=addresses&limit=1000&token=4bf578db00dbd24146a33a72f2ab8272
    public getAllContacts() {
        return this.http.get(this.baseUrl.concat(this.contacts));
    }

    // get all ContactAddresses 
    public getAllContactAdresses() {
        return this.http.get(this.baseUrl.concat(this.contactAddress_Endpoint));
    }

}
