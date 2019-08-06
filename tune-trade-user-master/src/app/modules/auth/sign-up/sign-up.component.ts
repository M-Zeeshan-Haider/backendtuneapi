import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { SignupRequest } from 'src/app/shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private authservie: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.signupForm = this.fb.group({
      userName: ['', Validators.required],
      userPassword: ['', [Validators.required, Validators.minLength(7)]],
      userId: ['', [Validators.required]],
      userEmail: ['', [Validators.required]]
    });
  }
  signup(data: SignupRequest) {
    this.authservie.signup(data).subscribe(
      res => {
        if (res.status === true) {
          this.router.navigate(['/auth', 'authpages']);
        }
      }
    );
  }
}
