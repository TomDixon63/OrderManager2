import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    //todo move to properties file
    // server api
    private baseUrl: string = 'http://127.0.0.1:8080';
    private contacts: string = '/kunden';

    constructor(private http: HttpClient) { }

    // get all contacts (kunden)
    public getAllContacts() {
        return this.http.get(this.baseUrl.concat(this.contacts));
    }

}
