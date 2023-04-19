import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }        //constructor(access specifiers type:class) {}

  getServices():Observable<any>{
      return this.http.get("http://localhost:4500/services")
  }
}
