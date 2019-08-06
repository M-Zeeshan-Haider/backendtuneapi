import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { LoginRequest } from 'src/app/shared/models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: any;
  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required]]
    });
  }
  login(data) {
    console.log('in login in login component result: ' + data);
    const loginData: LoginRequest = data;
    this.authservice.login(loginData).subscribe(
      res => {
        if (res.status === true) {
          this.router.navigate(['/user']);
          sessionStorage.setItem('authToken', res.token);
          for (let index = 0; index < res.data.length; index++) {
            this.email = res.data[index].userEmail;
            
          }
          localStorage.setItem('setemail', this.email)
        }
      }
    );
  }
}
