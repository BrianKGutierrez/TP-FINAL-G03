import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promocion } from '../models/promocion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  urlBase: string='http://localhost:3000/api/promocion/'

  constructor(private http: HttpClient) { }
  addPromocion(promocion:Promocion): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    let body: any = JSON.stringify(promocion);
    return this.http.post(this.urlBase, body, httpOptions);
  }
  getPromociones (): Observable<any>{
    return this.http.get (this.urlBase);
  }
  removePromocion (id: String ): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this.http.delete(this.urlBase+id, httpOptions);
  }
  getPromocionById (id: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this.http.get(this.urlBase+id, httpOptions);
  }
  updatePromocion(promocion: Promocion): Observable <any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any=JSON.stringify(promocion); 
    return this.http.put(this.urlBase+promocion._id, body, httpOptions);

  }
}
