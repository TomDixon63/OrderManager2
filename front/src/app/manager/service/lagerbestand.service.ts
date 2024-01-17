import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LagerBestandService {

    constructor(private http: HttpClient) { }

    getBestand() {
        return this.http.get<any>('assets/lagerbestand.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}