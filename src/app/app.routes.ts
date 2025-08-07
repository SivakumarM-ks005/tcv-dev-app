import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'slick',
        pathMatch:'full'
    },
    {
        path:'login',
        loadComponent:()=> import('./slick-carosuel/slick-carosuel.component').then(n =>n.SlickCarosuelComponent)
    }
];
