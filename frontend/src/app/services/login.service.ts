import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  hostBase: string;
  constructor(private _http:HttpClient) { 
  this.hostBase = "http://localhost:3000/api/usuario/";
  }
  public login(usuario: string, password: string):Observable<any> {
  const httpOption = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  }) 
  } 
  let body = JSON.stringify({ usuarios: usuario, password: password });
  console.log(body);
  return this._http.post(this.hostBase + 'login', body, httpOption);
  }
  public logout() {
  //borro el vble almacenado mediante el storage
  sessionStorage.removeItem("usuario");
  sessionStorage.removeItem("perfil");
  sessionStorage.removeItem("userid");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("activo");
   //borro el token almacenado mediante el storage
 sessionStorage.removeItem("token");
  }
  public userLoggedIn(){
    var resultado = false;
    var usuarios = sessionStorage.getItem("usuario");
    if(usuarios!=null){
    resultado = true;
    }
    return resultado;
    }
    public userLogged(){
    var usuarios = sessionStorage.getItem("usuario");
    return usuarios;
    }
    public idLogged(){
    var id = sessionStorage.getItem("userid");
    return id;
    }
    getToken():string{
      if (sessionStorage.getItem("token")!= null){
      return sessionStorage.getItem("token")!;
      }else{
      return "";
      }
      }
      
   }
