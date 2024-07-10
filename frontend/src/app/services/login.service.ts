import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  hostBase: string;
  constructor(private _http:HttpClient) { 
  this.hostBase = "http://localhost:3000/api/usuario/";
  }
  public login(usuario: string, password: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    let body = JSON.stringify({ usuario: usuario, password: password });
    console.log(body); // Verifica que los datos se estén enviando correctamente
  
    return this._http.post(this.hostBase + 'login', body, httpOption).pipe(
      tap((response: any) => {
        console.log('Respuesta del servidor:', response); // Verifica la respuesta del servidor completa
  
        // Almacenar datos en sessionStorage
        sessionStorage.setItem('user', response.usuario);
        sessionStorage.setItem('perfil', response.perfil);
        sessionStorage.setItem('userid', response.userid);
        sessionStorage.setItem('token', response.token);
      }),
      catchError(error => {
        console.error('Error al iniciar sesión:', error);
        throw error; // Propaga el error para que sea manejado por el suscriptor
      })
    );
  }
  public logout() {
  //borro el vble almacenado mediante el storage
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("perfil");
  sessionStorage.removeItem("userid");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("activo");
   //borro el token almacenado mediante el storage
 sessionStorage.removeItem("token");
  } 
  } 
  public userLoggedIn(){
    var resultado = false;
    var usuario = sessionStorage.getItem("user");
    if(usuario!=null){
    var usuario = sessionStorage.getItem("user");
    if(usuario!=null){
    resultado = true;
    }
    return resultado;
    }
    public userLogged(){
    var usuario = sessionStorage.getItem("user");
    return usuario;
    var usuario = sessionStorage.getItem("user");
    return usuario;
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
      public getUserRole(): string | null {
        const perfil = sessionStorage.getItem('perfil');
        console.log('Perfil recuperado:', perfil); // Depura aquí para verificar el valor
        return perfil;
      }
      
      
      
   }
