import { CommonInterceptor } from './common.interceptor';
import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SharedService {
 ApiUrl="https://localhost:44354/api";
  constructor( private http:HttpClient) { }
  getProducts():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/productApi');
  }

  postProducts(payload:any){
    return this.http.post(this.ApiUrl+'/productapi',payload);
  }

  getComments(){

  }
}
