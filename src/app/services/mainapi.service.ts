import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class MainapiService {

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });


  options = {
    headers: this.httpHeaders
  };

  constructor(private http: HttpClient, private zone: NgZone) { }


  getPlanTypes(): Observable<any>{
     const url = '../../assets/mockdata/licdata.json';
   // const url = environment.getCountryDetails;
    return this.http.get(url, this.options);
    
  }
}
