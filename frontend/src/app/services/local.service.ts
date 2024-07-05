import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Local } from '../models/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  hostBase:string;
  constructor(private _http: HttpClient) { 
    this.hostBase ="http://localhost:3000/api/local";
  }

  getLocales():Observable<any>{
    let httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
      return this._http.get(this.hostBase+'/',httpOptions);
    }

    createLocal(local:Local):Observable<any>{
      let httpOptions={
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
      let body:any =JSON.stringify(local);
        return this._http.post(this.hostBase+'/',body,httpOptions);
      }
      
 getLocal(id:string):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
      return this._http.get(this.hostBase+'/'+id,httpOptions);
    }

    updateLocal(local:Local):Observable<any>{
      let httpOptions={
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
      let body:any =JSON.stringify(local);
        return this._http.put(this.hostBase+'/',body,httpOptions);
    } 


    deleteLocal(id:string):Observable<any>{
      let httpOptions={
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
        return this._http.delete(this.hostBase+'/'+id,httpOptions);
      }

}
