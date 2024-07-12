import { Component } from '@angular/core';
import { Promocion } from '../../models/promocion';
import { PromocionService } from '../../services/promocion.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { PropietarioService } from '../../services/propietario.service';
import { AlquilerService } from '../../services/alquiler.service';
import { Propietario } from '../../models/propietario';
import { ApiFacebookService } from '../../services/api-facebook.service';

@Component({
  selector: 'app-promocion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promocion.component.html',
  styleUrl: './promocion.component.css'
})
export class PromocionComponent {
  promociones: Array<Promocion> = [];
  publicado!: boolean;
  constructor(private promocionService: PromocionService,
    private router: Router,
    public loginService: LoginService,
    private propietarioService: PropietarioService,
    private alquilerService: AlquilerService, 
    private apiFacebookService: ApiFacebookService
  ) {
    this.verificarTipoDeUsuario();

  }

  //VERIFICO TIPO DE USUARIO PARA DECIDIR QUE PROMOCIONES CARGAR 
  verificarTipoDeUsuario() {
    const rolUser: string = this.loginService.getUserRole();
    if (rolUser === 'propietario') {
      this.getPromocionesByPropietario();
    }
    else {
      this.getPromociones();
    }

  }
  //FILTRO PROMOCIONES POR PUBLICADAS O NO
  filtrar() {
    this.promocionService.filtrarPromocionesByPublicado(this.publicado.toString()).subscribe(
      data => {
        this.promociones = data;
      }
    )
  }
  //OBTENGO LAS PROMOCIONES DEL USUARIO LOGUEADO
  getPromocionesByPropietario() {
    let idUsaurio = sessionStorage.getItem('userid') ?? '';
    this.propietarioService.getPropietarioByIdUsuario(idUsaurio).subscribe
      ((propietario: Propietario) => {
        let idPropietario = propietario._id;
        this.alquilerService.getLocalesByPropietario(idPropietario).subscribe(
          data => {
            const locales: Array<string> = [];
            data.forEach((local: any) => {
              locales.push(local);
            })
            locales.forEach((local: any) => {
              this.promocionService.getPromocionesByLocal(local).subscribe(
                (data) => {
                  let promocion: Promocion = new Promocion();
                  data.forEach((element: any) => {
                    Object.assign(promocion, element);
                    this.promociones.push(promocion);
                    promocion = new Promocion();
                  });
                }
              )
            }
            )
          }
        )
      });


  }
  //TODAS LAS PROMOCIONES PARA EL ADMINISTRATIVO O PARA EL DUEÑO
  getPromociones() {
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
  promocionar(promocion: Promocion) {
    this.apiFacebookService.postFb(promocion.descripcion); 

    promocion.publicado = true;
    this.promocionService.updatePromocion(promocion).subscribe(
      data => {
        if (data.status == 1) {
          alert("La promocion se ha publicado correctamente ");
        }
      }
    )
  }
  
  modificar(id: string) {
    this.router.navigate(['promocion-form', id]);
  }

  eliminar(id: string) {
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
