import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './common-components/layout/layout.component';
import { SignupComponent } from './signup/signup.component';
export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch:'full'
    },
    {
        path:'',
        component: LoginComponent
    },
     {
        path:'signup',
        component: SignupComponent,
    },
    
    {
        path:'layout',
       component: LayoutComponent
        // children:[ {
        //     path:'',
        // }]
    }
];
