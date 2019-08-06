import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthOutletComponent } from './auth-outlet/auth-outlet.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, AuthOutletComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthModule { }
