import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url:string=environment.api;
  constructor(private http: HttpClient) { }
  getData(api:string,params:any) {
    return params ? this.http.get(this.base_url + api,{params}):this.http.get(this.base_url + api);
  }
}
