import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelDeControlService {

  hostBase: string;

  constructor(private http: HttpClient) { 
    this.hostBase = "http://localhost:3000/api/cuota";
  }

  getPagosPorMes(mes: number, anio: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.hostBase + '/pagos-por-mes?mes=' + mes + '&anio=' + anio, httpOptions);
  }
}
