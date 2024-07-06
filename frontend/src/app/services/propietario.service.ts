import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Propietario } from '../models/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http: HttpClient) {
  }

  getPropietarios(): Observable<any> {
    return this.http.get("http://127.0.0.1:3000/api/propietario");
  }

  addPropietario(propietario: Propietario): Observable<any> {
    return this.http.post("http://127.0.0.1:3000/api/propietario", propietario);
  }

  deletePropietario(id: String): Observable<any> {
    return this.http.delete("http://127.0.0.1:3000/api/propietario/" + id);
  }

  editPropietario(propietario: Propietario): Observable<any> {
    return this.http.put("http://127.0.0.1:3000/api/propietario/", propietario);
  }

  getPropietario(id: String): Observable<any> {
    return this.http.get("http://127.0.0.1:3000/api/propietario/" + id)

  }

  obtenerEspectadores(): Observable<any> {
    return this.http.get("http://127.0.0.1:3000/api/propietario");
  }
}

