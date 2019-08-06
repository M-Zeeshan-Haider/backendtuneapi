import { Routes } from '@angular/router';

export const MainRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
    {
        path: 'auth',
        loadChildren: 'src/app/modules/auth/auth.module#AuthModule'
    },
    {
        path: 'user',
        loadChildren: 'src/app/modules/user/user.module#UserModule'
    }
];
