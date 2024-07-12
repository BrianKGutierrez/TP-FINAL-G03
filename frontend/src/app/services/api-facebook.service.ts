import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/providers/facebook';


@Injectable({
  providedIn: 'root'
})
export class ApiFacebookService {

  constructor(private fb: FacebookService) {
    this.iniciarFb();

  }
  ngOnInit(): void {

  }
  postFb(message: string) {
    var apiMethod: ApiMethod = "post";
    this.fb.api(
      //ID DE LA PAGINA DE FACEBOOK
      '/346995121835378/feed',
      apiMethod,
      {
        "message": message,
        //Token generado en APIGRAPH
        "access_token": "EAARJ1RoFwVgBO6WXbZC4fLTkqB72OwRNpbhZAAIMV076smzFj3joZCPtU3UjFPLagPBM5YMQOrAHzePMFL3zdbIiN8zjIBhEG7eFBaXPZCxCRp9IFKZCyjZCHW0ZBXvXXLkAt0ySrwjEnCOQOXQMSla4iJ2AJlDW2AkpzO8grKcp46oWB7BDTXrt8A99IxL2REyNGizeZAGG26nbDiLBvSRWA9D2"
      },
    ).then(response => {
      console.log('LA PUBLICACION SE HA REALIZADO CON EXITO', response);
    }).catch(error => {
      console.error('NO SE HA PODIDO REALIZAAR LA PUBLICACION', error);
    })
  }

  iniciarFb() {
    let initParams: InitParams = {
      //ID DE LA APP
      appId: '1207079520289112',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v20.0'
    };
    this.fb.init(initParams);
  }


}
