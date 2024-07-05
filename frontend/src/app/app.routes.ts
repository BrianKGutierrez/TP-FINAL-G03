import { Routes } from '@angular/router';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { FormPropietarioComponent } from './components/form-propietario/form-propietario.component';
import { LocalesComponent } from './components/locales/locales.component';
import { FormLocalComponent } from './components/form-local/form-local.component';

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
    }

];
