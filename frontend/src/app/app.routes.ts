import { Routes } from '@angular/router';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { FormPropietarioComponent } from './components/form-propietario/form-propietario.component';
import { LocalesComponent } from './components/locales/locales.component';
import { FormLocalComponent } from './components/form-local/form-local.component';
import { LoginComponent } from './components/login/login.component';
import { AlquilerListComponent } from './components/alquiler-list/alquiler-list.component';
import { AlquilerCreateComponent } from './components/alquiler-create/alquiler-create.component';
import { AlquilerEditComponent } from './components/alquiler-edit/alquiler-edit.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { PagosFormComponent } from './components/pagos-form/pagos-form.component';
import { PromocionComponent } from './components/promocion/promocion.component';
import { PromocionFormComponent } from './components/promocion-form/promocion-form.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';
import { roleGuard } from './guards/roleguards.guard';

export const routes: Routes = [
  {
    path: 'propietario',
    component: PropietarioComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'formpropietario/:id',
    component: FormPropietarioComponent,  canActivate: [AuthGuard],
  },
  {
    path: 'formLocal/:id/:filtro',
    component: FormLocalComponent,  canActivate: [AuthGuard]
  },

  {
    path: 'locales/:filtro',
    component: LocalesComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'alquileres', component: AlquilerListComponent ,  canActivate: [AuthGuard],},
  { path: 'alquileres/crear', component: AlquilerCreateComponent,  canActivate: [AuthGuard], },
  { path: 'alquileres/editar/:id', component: AlquilerEditComponent ,  canActivate: [AuthGuard],},
  { path: 'registrar', component: SignupComponent ,  canActivate: [AuthGuard],canMatch: [roleGuard],
    data: { roles: [ 'dueño'] }},
  { path: 'home', component: HomeComponent },
  { path: 'pagos-form/:estado', component: PagosFormComponent , canActivate: [AuthGuard], },
  { path: 'pagos', component: PagosComponent,  canActivate: [AuthGuard]},

  { path: 'promocion', component: PromocionComponent },
  { path: 'promocion-form/:id', component: PromocionFormComponent ,  canActivate: [AuthGuard],},
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
];
