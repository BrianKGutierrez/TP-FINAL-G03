import { Routes } from '@angular/router';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { FormPropietarioComponent } from './components/form-propietario/form-propietario.component';
import { LocalesComponent } from './components/locales/locales.component';
import { FormLocalComponent } from './components/form-local/form-local.component';
import { LoginComponent } from './components/login/login.component';
import { AlquilerListComponent } from './components/alquiler-list/alquiler-list.component';
import { AlquilerCreateComponent } from './components/alquiler-create/alquiler-create.component';
import { AlquilerEditComponent } from './components/alquiler-edit/alquiler-edit.component';

export const routes: Routes = [

    {
        path: 'propietario', component : PropietarioComponent
        
    },
    {
        path: 'formpropietario/:id', component : FormPropietarioComponent
        
    },
    {
        path: 'locales',
        component: LocalesComponent,
    },
    
    {
        path: 'formLocal/:id',
        component: FormLocalComponent,
    },
    {path: 'login', component: LoginComponent},
    { path: 'alquileres', component: AlquilerListComponent },
    { path: 'alquileres/crear', component: AlquilerCreateComponent},
    { path: 'alquileres/editar/:id', component: AlquilerEditComponent },

];
