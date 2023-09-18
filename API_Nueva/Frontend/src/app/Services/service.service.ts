import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  url = "";

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:4000";
  }

  SLogin(objeto: any): Observable<any[]> {
    return this.http.post<any>(this.url + '/Grupo9/Login', objeto);
  }
  SActualizarPass(objeto: any): Observable<any[]> {
    return this.http.post<any>(this.url + '/Grupo9/ForgotPassword', objeto);
  }
  SRegistrar(objeto: any): Observable<any[]> {
    return this.http.post<any>(this.url + '/Grupo9/addUser', objeto);
  }

}