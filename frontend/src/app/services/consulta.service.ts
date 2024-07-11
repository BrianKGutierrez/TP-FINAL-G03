import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Consulta } from '../models/consulta';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  hostBase: string;
  constructor(private _http: HttpClient) {
    this.hostBase = 'http://localhost:3000/api/consulta';
  }

  createConsulta(consulta: Consulta): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body: any = JSON.stringify(consulta);
    return this._http.post(this.hostBase + '/', body, httpOptions);
  }

  getConsultas(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get(this.hostBase, httpOptions);
  }

  updateConsulta(consulta: Consulta): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body: any = JSON.stringify(consulta);
    return this._http.put(
      this.hostBase + '/' + consulta._id,
      body,
      httpOptions
    );
  }
}
