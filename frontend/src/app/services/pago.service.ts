import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

    private apiMercadoPago = 'http://localhost:3000/api/mercado-pago'; // URL de tu backend
    constructor(private http: HttpClient) { }
    generarLinkDePago(items: any[], backUrls: any): Observable<any> {
      const body = { items, back_urls: backUrls };
      return this.http.post<any>(this.apiMercadoPago+'/generar-link-de-pago', body);
    }

  
}
