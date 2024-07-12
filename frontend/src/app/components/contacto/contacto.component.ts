import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { ConsultaService } from '../../services/consulta.service';
import { Consulta } from '../../models/consulta';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RecaptchaModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent implements OnInit {
  formulario!: FormGroup;
  consultas: Array<Consulta> = [];
  constructor(
    private fb: FormBuilder,
    private consultaService: ConsultaService
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nombreCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      consulta: ['', Validators.required],
      estado: [false],
    });
  }

  executeReCaptcha(token: any) {
    console.log(token);
  }

  createConsulta() {
    this.consultaService
      .createConsulta(this.formulario.value)
      .subscribe((resp) => {
        this.formulario.reset();
        console.log(resp);
      });
  }

  getConsultas() {
    this.consultaService.getConsultas().subscribe(
      (data) => {
        let consulta: Consulta = new Consulta();
        data.forEach((element: any) => {
          Object.assign(consulta, element);
          this.consultas.push(consulta);
          consulta = new Consulta();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
