import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTokenRequest } from '../../../shared/models';
import { TokenService } from 'src/app/shared/services/token-service/token.service';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.scss']
})
export class CreateTokenComponent implements OnInit {
  createTokenForm: FormGroup;
  tokenData: CreateTokenRequest;
  submitted: boolean;
  constructor(private fb: FormBuilder, private tokenService: TokenService) {
    this.kycForm();
  }

  ngOnInit() {
   
  }

  get f() { return this.createTokenForm.controls; }
  kycForm() {
    this.createTokenForm = this.fb.group(
      {
        tokenName: [null, [Validators.required]],
        tokenSymbol: [null, [Validators.required]],
        totalSupply: [null, [Validators.required]],
        decimals: [null, [Validators.required]],
        ethAddress: [null, [Validators.required]],
        author: [null, [Validators.required]],
        website: [null, [Validators.required]],
        soundCloud: [null, [Validators.required]],
        youtube: [null, [Validators.required]],
        category: [null, [Validators.required]],
        tokenDescription: [null, [Validators.required]]
      }
    );
  }

  submitToken(data) {
    this.submitted = true;
    if (this.createTokenForm.invalid) {
        return;
    }
    else{
    this.tokenData = data;
    console.log(this.tokenData)
    this.tokenService.createToken(data).subscribe(
      res => {
        console.log(res);
        this.createTokenForm.reset();
        this.submitted=false;
      }
    );
  }
  }
}
