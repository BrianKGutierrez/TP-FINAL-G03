import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Novedad } from '../models/novedad';

@Injectable({
  providedIn: 'root',
})
export class NovedadService {
  hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = 'http://localhost:3000/api/novedad';
  }

  getNovedades(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get(this.hostBase + '/', httpOptions);
  }

  createNovedad(novedad: Novedad): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body: any = JSON.stringify(novedad);
    delete body._id;
    return this._http.post(this.hostBase, body, httpOptions);
  }

  updateNovedad(novedad: Novedad): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body: any = JSON.stringify(novedad);
    return this._http.put(this.hostBase + '/' + novedad._id, body, httpOptions);
  }
}
