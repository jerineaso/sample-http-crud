import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import {Observable } from 'rxjs'
import { post } from '../postmodal';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http : HttpClient) { }

  getAllPost(): Observable<post>{
    return this.http.get<post>(environment.api_url)
  }

  post(val : post): Observable<any>{
    return this.http.post(environment.api_url,val)
  }

  put(val :post): Observable<any>{
    return this.http.put(environment.api_url+"/1", val)
  }
}
