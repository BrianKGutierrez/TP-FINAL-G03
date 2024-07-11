import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { NovedadService } from '../../services/novedad.service';
import { Novedad } from '../../models/novedad';
import { CommonModule } from '@angular/common';
import { AlquilerService } from '../../services/alquiler.service';
import { PropietarioService } from '../../services/propietario.service';
import { Propietario } from '../../models/propietario';
import { Alquiler } from '../../models/alquiler';

@Component({
  selector: 'app-novedad-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './novedad-form.component.html',
  styleUrl: './novedad-form.component.css',
})
export class NovedadFormComponent {
  novedad: Novedad = new Novedad();
  alquiler!: any;
  alquileres!: Array<any>;

  constructor(
    private novedadService: NovedadService,
    private alquilerService: AlquilerService,
    private propietarioService: PropietarioService
  ) {
    console.log(this.novedad);
    this.validarAlquileres();
  }

  validarAlquileres() {
    let idUsaurio = sessionStorage.getItem('userid') ?? '';
    this.propietarioService
      .getPropietarioByIdUsuario(idUsaurio)
      .subscribe((propietario: Propietario) => {
        let idPropietario = propietario._id;
        this.alquilerService
          .getAlquilerbyIdPropietario(idPropietario)
          .subscribe((alquileres: Array<Alquiler>) => {
            this.alquileres = alquileres;
          });
      });
  }

  createNovedad() {
    this.novedad.local = this.alquiler.local._id;
    this.novedad.propietario = this.alquiler.propietario._id;

    this.novedadService.createNovedad(this.novedad).subscribe((resp) => {
      this.novedad = new Novedad();
      console.log(resp);
    });
  }
}
