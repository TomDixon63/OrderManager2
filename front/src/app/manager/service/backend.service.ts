import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

  //todo move to properties file
  // server api
  // private baseUrl: string = 'http://127.0.0.1:8080'; // spring boot 
  // private contacts: string = '/kunden';
  private baseUrl: string = "https://my.sevdesk.de/api/v1";
  private securityToken: string = "token=4bf578db00dbd24146a33a72f2ab8272";
  private limit: string = "limit=1000";

  private contact_endpoint_with_address: string = "/Contact?embed=addresses";
  private order_endpoint_with_status_500_and_positions: string = "/Order?status=500&embed=positions";

  private SLASH: string = "/";

  private AND_MARK: string = "&";

  private QUESTION_MARK: string = "?";

  private AMPERSAND: string = "&";

  constructor(private http: HttpClient) { }


  // ---------------------------------------------- Sevdesk

  // get all Contact (max. 1000) with addresses
  // https://my.sevdesk.de/api/v1/Contact?embed=addresses&limit=1000&token=4bf578db00dbd24146a33a72f2ab8272
  public getAllContacts() {
    let url: string = this.baseUrl.concat(this.contact_endpoint_with_address).concat(this.AND_MARK).concat(this.limit).concat(this.AMPERSAND).concat(this.securityToken);
    return this.http.get(url);
  }


  /* Order status	Meaning	Status code
  Draft	The order is still a draft. It has not been sent to the end-customer and can still be changed.	100
  Delivered	The order has been sent to the end-customer. 200
  Rejected / Cancelled	The order has been rejected by the end-customer. 300
  Accepted	The order has been accepted by the end-customer. 500
  Partially Calculated	An invoice for parts of the order (but not the full order) has been created. 750
  Calculated	The order has been calculated. One or more invoices have been created covering the whole order.	1000
  */
  // get all Order with Positions and Status 200
  // https://my.sevdesk.de/api/v1/Order?status=200&embed=positions&token=4bf578db00dbd24146a33a72f2ab8272
  public getAllOrder() {
    //  console.log(" BackendService ->getAllOrder()");
    let url: string = this.baseUrl.concat(this.order_endpoint_with_status_500_and_positions).concat(this.AMPERSAND).concat(this.securityToken);
    return this.http.get(url);
    /*
    let url: string = this.baseUrl.concat(this.order_endpoint_with_status_500_and_positions).concat(this.AMPERSAND).concat(this.securityToken);
    try{
       const response = this.http.get(url);
       console.log(response);
       return response;
    }
   catch(err){
    console.log(" BackendService ->getAllOrder() -> Error:");
    console.log(err);
    return;
   }*/
  }

  // --------------------------------------------------- Node Server

}
