import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquiler } from '../models/alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = 'http://localhost:3000/api/alquiler';
  }

  getAlquileres(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get(this.hostBase + '/', httpOptions);
  }

  createAlquiler(alquiler: Alquiler): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body: any = JSON.stringify(alquiler);
    return this._http.post(this.hostBase + '/', body, httpOptions);
  }

  getAlquiler(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get(this.hostBase + '/' + id, httpOptions);
  }

  updateAlquiler(alquiler: Alquiler): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body: any = JSON.stringify(alquiler);
    return this._http.put(this.hostBase + '/' + alquiler._id, body, httpOptions);
  }

  deleteAlquiler(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.delete(this.hostBase + '/' + id, httpOptions);
  }
}
