import { Component } from '@angular/core';
import { Novedad } from '../../models/novedad';
import { NovedadService } from '../../services/novedad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novedad',
  standalone: true,
  imports: [],
  templateUrl: './novedad.component.html',
  styleUrl: './novedad.component.css',
})
export class NovedadComponent {
  novedades: Array<Novedad> = [];

  constructor(private novedadService: NovedadService) {
    this.obtenerNovedades();
  }

  obtenerNovedades(): void {
    this.novedadService.getNovedades().subscribe(
      (data) => {
        this.novedades = data;
      },
      (error) => {
        console.error('Error al obtener Novedades:', error);
      }
    );
  }
  //Boton que cambia el estado de Novedad a resuelto
  // guardarNovedad(): void {
  //   this.novedadService.updateNovedad(this.formulario.value).subscribe(
  //     (data) => {
  //       console.log('Novedad actualizada correctamente:', data);
  //     },
  //     (error) => {
  //       console.error('Error al actualizar Novedad:', error);
  //     }
  //   );
  // }
}
