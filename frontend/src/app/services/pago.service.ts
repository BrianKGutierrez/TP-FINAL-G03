import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private apiMercadoPago = 'http://localhost:3000/api/mercado-pago';
    private apiPago = 'http://localhost:3000/api/pagos';
    
    private pagoKey = 'pago';

  guardarPago(pago: Pago) {
    localStorage.setItem(this.pagoKey, JSON.stringify(pago));
  }

  obtenerPago(): Pago  {
    const pagoString = localStorage.getItem(this.pagoKey);
    return pagoString ? JSON.parse(pagoString) : null;
  }

    constructor(private http: HttpClient) { }
    generarLinkDePago(items: any[], backUrls: any): Observable<any> {
      const body = { items, back_urls: backUrls };
      return this.http.post<any>(this.apiMercadoPago+'/generar-link-de-pago', body);
    }

    createPago(pago:Pago): Observable<any> {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      let body: any = JSON.stringify(pago);
      return this.http.post(this.apiPago+'/', body, httpOptions);
    }
  

  
}
