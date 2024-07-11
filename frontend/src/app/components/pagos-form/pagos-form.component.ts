import { Component , Inject, PLATFORM_ID } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { Pago } from '../../models/pago';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router ,ActivatedRoute} from '@angular/router';

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
  constructor(private pagoService: PagoService,private router: Router,private activateRoute: ActivatedRoute,@Inject(PLATFORM_ID) private platformId: Object) { 
    this.pago = new Pago();
    this.items = [];
    this.backUrls={};
    this.estado = 'pendiente';
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
      success: 'http://localhost:4200/pagos-form/pagado',
      //failure: 'https://tu-sitio.com/pago-fallido',
      pending: 'http://localhost:4200/pagos-form/pendiente',
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
}
