import { Routes } from '@angular/router';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { FormPropietarioComponent } from './components/form-propietario/form-propietario.component';

export const routes: Routes = [

    {
        path: 'propietario', component : PropietarioComponent
        
    },
    {
        path: 'formpropietario/:id', component : FormPropietarioComponent
        
    }

];
