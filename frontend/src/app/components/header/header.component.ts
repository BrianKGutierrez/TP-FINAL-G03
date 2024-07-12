import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NovedadComponent } from '../novedad/novedad.component';
import { ContactoListComponent } from '../contacto-list/contacto-list.component';
import { ConsultaService } from '../../services/consulta.service';
import { Consulta } from '../../models/consulta';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NovedadComponent,
    ContactoListComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  numeroMensajesNoLeidos: number = 0;
  constructor(
    public loginService: LoginService,
    private router: Router,
    private consultaService: ConsultaService
  ) {}

  ngOnInit() {
    this.contarConsultasNoLeidos();
  }
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  contarConsultasNoLeidos() {
    return this.consultaService.getConsultas().subscribe((res) => {
      this.numeroMensajesNoLeidos = res.filter(
        (consulta: Consulta) => !consulta.estado
      ).length;
    });
  }
}
