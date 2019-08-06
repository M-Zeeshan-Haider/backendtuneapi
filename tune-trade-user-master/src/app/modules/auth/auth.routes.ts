import { Routes } from '@angular/router';
import { AuthOutletComponent } from './auth-outlet/auth-outlet.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'authpages'
    },
    {
        path: 'authpages',
        component: AuthOutletComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'register',
                component: SignUpComponent
            }
        ]
    }
];
