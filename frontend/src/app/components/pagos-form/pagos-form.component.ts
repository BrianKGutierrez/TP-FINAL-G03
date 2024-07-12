import { Component , Inject, PLATFORM_ID } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { Pago } from '../../models/pago';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router ,ActivatedRoute} from '@angular/router';
import { Alquiler } from '../../models/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { LocalService } from '../../services/local.service';
import { PropietarioService } from '../../services/propietario.service';
import { Propietario } from '../../models/propietario';
import { CuotaService } from '../../services/cuota.service';
import { Cuota } from '../../models/cuota';

@Component({
  selector: 'app-pagos-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pagos-form.component.html',
  styleUrl: './pagos-form.component.css'
})
export class PagosFormComponent {

 
  pago:Pago;
  estado:string;
  items: any[];
  backUrls:{};
  Alquileres:Alquiler[] = [];
  Propietarios:Propietario[] = [];
  id_alquiler="";
  id_prop="";
  constructor(private pagoService: PagoService,private cuotaService: CuotaService,private router: Router,private alquilerService: AlquilerService,private  propietarioService:PropietarioService,
    private activateRoute: ActivatedRoute,@Inject(PLATFORM_ID) private platformId: Object) { 
    this.pago = new Pago();
    this.items = [];
    this.backUrls={};
    this.estado = 'pendiente';
    this.getPropietarios();
  }
  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe(params=> {
      console.log(params);
      //if (isPlatformBrowser(this.platformId)) {
      const cleanUrl = window.location.pathname; 
      window.history.replaceState({}, document.title, cleanUrl);
    });
    this.activateRoute.params.subscribe(params=>{
      this.estado=params['estado'];
  });
 
  if(this.estado==='pagado')
  {   
    if (this.pago) {
      this.pago=this.pagoService.obtenerPago();
    } else {
      console.error('No se encontró información válida de pago.');
    }
   
    this.pagoService.createPago(this.pago).subscribe(
      (data: any) => {
        alert("Pago guardado correctamente")
        this.estado='pendiete'
        console.log(this.pago)
      },
      error => {
        console.log(error);
        
      }

    );

  }
  }

  generarPago() {
    // Actualizar la fecha de pago antes de guardar
    this.pago.fechaDePago = new Date(); // Esto asigna la fecha actual
    this.pagoService.guardarPago(this.pago);
    this.items = [
      {
        title: 'Pago de Alquiler',
        unit_price: this.pago.monto,
        quantity: 1,
      }
    ];
  
    this.backUrls = {
      success: 'https://localhost:4200/pagos-form/pagado',
      //failure: 'https://tu-sitio.com/pago-fallido',
      pending: 'https://localhost:4200/pagos-form/pendiente',
      payer_email: 'test_user_1814832006@testuser.com',
    };
  
    var paymentLink: string;
    this.pagoService.generarLinkDePago(this.items, this.backUrls).subscribe(
      (data) => {
        paymentLink = data.payment_link;
       // window.open(paymentLink, '_blank'); 
        window.location.href = data.payment_link;
      },
      (error) => {
        console.error('Error al generar el link de pago', error);
      }
    );
}
getAlquileres(){

  if (this.id_prop) {
    this.alquilerService.getAlquilerbyIdPropietario(this.id_prop).subscribe(
      (data: any) => {
        this.Alquileres = data;
        console.log(this.Alquileres);
      },
      error => {
        console.log(error);
      }
    );
  } else {
    this.Alquileres = [];
  }


}

getPropietarios(){
  this.propietarioService.getPropietarios().subscribe(
    (data: any) => {
      this.Propietarios = data;
    console.log(this.Propietarios);
    },
    error => {
      console.log(error);
    }
  );

}


cuotas: Cuota[] = [];
ObtnerCuotasByID(){
  this.cuotaService.getCuotasAlquiler(this.id_alquiler).subscribe(
    (data:any) => {
      this.cuotas = data;  
    },
    (error) => {
      console.error('Error al obtener cuotas:', error);
  
    }
  );}

}
