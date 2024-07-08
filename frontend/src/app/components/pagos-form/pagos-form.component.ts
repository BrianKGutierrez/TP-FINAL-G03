import { Component } from '@angular/core';
import { PagoService } from '../../services/pago.service';

@Component({
  selector: 'app-pagos-form',
  standalone: true,
  imports: [],
  templateUrl: './pagos-form.component.html',
  styleUrl: './pagos-form.component.css'
})
export class PagosFormComponent {

  items = [
    {
      title: 'Producto de prueba',
      unit_price: 100,
      quantity: 1,
    }
  ];

  backUrls = {
    success: 'http://localhost:4200/pagos',
    failure: 'https://tu-sitio.com/pago-fallido',
    pending: 'http://localhost:4200/pagos',
    payer_email: 'test_user_1814832006@testuser.com',
  };

  paymentLink: string='';

  constructor(private pagoService: PagoService) { }

  generarPago() {
    this.pagoService.generarLinkDePago(this.items, this.backUrls).subscribe(
      (data) => {
        this.paymentLink = data.payment_link;
        window.location.href = data.payment_link;
      },
      (error) => {
        console.error('Error al generar el link de pago', error);
      }
    );
}
}
