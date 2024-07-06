import { Component } from '@angular/core';
import { Alquiler } from '../../models/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alquiler-list',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './alquiler-list.component.html',
  styleUrl: './alquiler-list.component.css'
})
export class AlquilerListComponent {
  alquileres: Alquiler[] = [];

  constructor(private alquilerService: AlquilerService) { }

  ngOnInit(): void {
    this.obtenerAlquileres();
  }

  obtenerAlquileres(): void {
    this.alquilerService.getAlquileres().subscribe(
      (data) => {
        this.alquileres = data;
      },
      (error) => {
        console.error('Error al obtener alquileres:', error);
      }
    );
  }

  eliminarAlquiler(id: string): void {
    this.alquilerService.deleteAlquiler(id).subscribe(
      (data) => {
        console.log('Alquiler eliminado correctamente:', data);
        this.obtenerAlquileres(); // Actualiza la lista después de eliminar
      },
      (error) => {
        console.error('Error al eliminar alquiler:', error);
      }
    );
  }
}
