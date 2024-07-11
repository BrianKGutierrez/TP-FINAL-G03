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

@Component({
  selector: 'app-novedad-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './novedad-form.component.html',
  styleUrl: './novedad-form.component.css',
})
export class NovedadFormComponent {
  // formulario!: FormGroup;
  novedad: Novedad = new Novedad();
  constructor(
    private novedadService: NovedadService,
    private fb: FormBuilder
  ) {}

  // ngOnInit(): void {
  //   this.formulario = this.fb.group({
  //     fechaCreacion: [new Date(), Validators.required],
  //     fechaFinalizacion: [''],
  //     descripcion: ['', Validators.required],
  //     estado: [false],
  //     local: ['', Validators.required],
  //     propietario: ['', Validators.required],
  //   });
  // }

  createNovedad() {
    this.novedadService.createNovedad(this.novedad).subscribe((resp) => {
      this.novedad = new Novedad();
      console.log(resp);
    });
  }
}
