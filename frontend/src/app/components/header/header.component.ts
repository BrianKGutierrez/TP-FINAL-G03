import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NovedadComponent } from '../novedad/novedad.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, NovedadComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(public loginService: LoginService, private router: Router) {}
  ngOnInit() {}
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
