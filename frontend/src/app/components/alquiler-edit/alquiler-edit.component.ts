import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../../models/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alquiler-edit',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './alquiler-edit.component.html',
  styleUrl: './alquiler-edit.component.css'
})
export class AlquilerEditComponent implements OnInit{
  alquiler: Alquiler;

  constructor(private route: ActivatedRoute, private alquilerService: AlquilerService, private router: Router) {
    this.alquiler = new Alquiler();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.alquilerService.getAlquiler(id).subscribe(
        (data) => {
          this.alquiler = data;
        },
        (error) => {
          console.error('Error al obtener alquiler:', error);
        }
      );
    }
  }

  guardarCambios(): void {
    this.alquilerService.updateAlquiler(this.alquiler).subscribe(
      (data) => {
        console.log('Alquiler actualizado correctamente:', data);
        this.router.navigate(['/alquileres']); // Redirige al listado después de actualizar
      },
      (error) => {
        console.error('Error al actualizar alquiler:', error);
      }
    );
  }
}