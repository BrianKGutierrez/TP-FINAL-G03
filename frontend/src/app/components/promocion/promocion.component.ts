import { Component } from '@angular/core';
import { Promocion } from '../../models/promocion';
import { PromocionService } from '../../services/promocion.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promocion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promocion.component.html',
  styleUrl: './promocion.component.css'
})
export class PromocionComponent {
  promociones: Array<Promocion>=[]; 
  constructor(private promocionService: PromocionService,
              private router: Router
  ){
    this.getPromociones(); 


  }
  getPromociones () {
    
    this.promocionService.getPromociones().subscribe(
      (data) => {
        let promocion: Promocion = new Promocion();
        data.forEach((element: any) => {
          Object.assign(promocion, element);
          this.promociones.push(promocion);
          promocion = new Promocion();
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  modificar (id: string){
    this.router.navigate(['promocion-form', id]); 
  }
  
  eliminar (id: string ){
    this.promocionService.removePromocion(id).subscribe(
      result => {
        if (result.status == 1) {
          alert("El Ticket se ha eliminado correctamente");
          let indexToRemove = this.promociones.findIndex(promocion => promocion._id === id); 
          if (indexToRemove !== -1) {
            this.promociones.splice(indexToRemove, 1);
          }
          this.router.navigate(['promocion']); 
        }
      },
      error => {
        alert("Ha ocurrido un error");
        console.log(error);
      }
    )

  }

}
