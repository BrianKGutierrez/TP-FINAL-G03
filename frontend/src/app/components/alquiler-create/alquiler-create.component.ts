import { Component } from '@angular/core';
import { AlquilerService } from '../../services/alquiler.service';
import { Router, RouterModule } from '@angular/router';
import { Alquiler } from '../../models/alquiler';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropietarioService } from '../../services/propietario.service';
import { LocalService } from '../../services/local.service';
import { Propietario } from '../../models/propietario';
import { Local } from '../../models/local';

@Component({
  selector: 'app-alquiler-create',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './alquiler-create.component.html',
  styleUrl: './alquiler-create.component.css'
})
export class AlquilerCreateComponent {
  alquiler: Alquiler = new Alquiler();
  locales: Local[] = [];
  propietarios: Propietario[] = [];

  constructor(
    private alquilerService: AlquilerService,
    private localService: LocalService,
    private propietarioService: PropietarioService
  ) { }

  ngOnInit(): void {
    this.getLocales();
    this.getPropietarios();
  }

  getLocales() {
    this.localService.getLocales().subscribe(
      (result) => {
        this.locales = result;
      },
      (error) => {
        console.error('Error obteniendo locales:', error);
      }
    );
  }

  getPropietarios() {
    this.propietarioService.getPropietarios().subscribe(
      (result) => {
        this.propietarios = result;
      },
      (error) => {
        console.error('Error obteniendo propietarios:', error);
      }
    );
  }

  crearAlquiler() {
    this.alquilerService.createAlquiler(this.alquiler).subscribe(
      (result) => {
        console.log('Alquiler creado exitosamente:', result);
        // Aquí puedes redirigir a la página de detalles del alquiler o hacer otra acción después de crearlo
      },
      (error) => {
        console.error('Error al crear alquiler:', error);
      }
    );
  }
}
