import { Routes } from '@angular/router';
import { UserOutletComponent } from './user-outlet/user-outlet.component';
import { UserHomeComponent } from './home-group/user-home/user-home.component';
import { KYCComponent } from './KYC-group/kyc/kyc.component';
import { ProfileComponent } from './profile-group/profile/profile.component';
import { CreateTokenComponent } from './component-createtoken/create-token/create-token.component';
import { MainCreatetokenComponent } from './component-createtoken/main-createtoken/main-createtoken.component';

export const UserRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: UserOutletComponent,
        children: [
            {
                path: '',
                component: UserHomeComponent
            },
            {
                path: 'kycmain',
                component: KYCComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'createtoken',
                component: CreateTokenComponent
            },
            {
                path: 'tokenmain',
                component: MainCreatetokenComponent
            }
        ]
    }
];
