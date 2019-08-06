import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { KycRequest } from 'src/app/shared/models';
import { KycService } from 'src/app/shared/services/kyc/kyc.service';
import { EmittersService } from '../../../../../shared/services/emitters.service';
@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.scss']
})
export class KycFormComponent implements OnInit {
  kycForm: FormGroup;
  imageSrc = "";
  kycFormData: KycRequest;
  verificationTypes = ['passport', 'cnic', 'license'];
  verificationType = this.verificationTypes[0];
  @Output() goToSuccessTrigger = new EventEmitter<boolean>();
  submitted: boolean;
  email1: string;
  formdisable: boolean;
  constructor(private fb: FormBuilder, private kyc: KycService, private emit: EmittersService) {
  }
  ngOnInit() {
    this.createKYCForm();
    this.email1=localStorage.getItem('setemail');
    console.log(this.email1);
  
    
  }
  goToSuccess() {
    this.goToSuccessTrigger.emit(true);
  }
  createKYCForm() {
    this.kycForm = this.fb.group({
      firstName: ['', [Validators.required ]],
      lastName: ['', [Validators.required]],
      email: [''],
      phoneNumber: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      teleName: ['', [Validators.required]],
      addressOne: ['', [Validators.required]],
      addressTwo: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      nationality: ['', [Validators.required]] ,
      zipCode: ['', [Validators.required]],
      idImage: ['', [Validators.required]],
      walletType: ['', [Validators.required]],
      checkbox1: ['', [Validators.required]],
      checkbox2: ['', [Validators.required]],
      walletAddress: ['', [Validators.required, Validators.minLength(42), Validators.maxLength(42)]]
    });
  }
  get f() { return this.kycForm.controls; }
  sendkycForm(data) {
    this.submitted = true;
    if (this.kycForm.invalid) {
        return;
    }
    else{
      this.kycForm.value.email=this.email1;
    this.kycFormData = {
    ...data,
    imageAddress: this.imageSrc,
    verificationType: this.verificationType
    };
    this.kyc.sendKycForm(this.kycFormData).subscribe(
      res => {
        if(res.status === true) {
          this.emit.sendData(this.email1);
          this.goToSuccess();
        }
      }
    );
    }
  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
  }
  setVerificationType(index: number) {
    this.verificationType = this.verificationTypes[index];
  }

}