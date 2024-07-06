import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LocalesComponent } from './components/locales/locales.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { FormPropietarioComponent } from './components/form-propietario/form-propietario.component';
import { FormLocalComponent } from './components/form-local/form-local.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,LoginComponent,LocalesComponent,PropietarioComponent,FormPropietarioComponent,FormLocalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
