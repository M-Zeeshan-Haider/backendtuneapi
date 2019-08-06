import { Component, OnInit } from '@angular/core';
import { KycService } from '../../services/kyc/kyc.service';
import { EmittersService } from '../../services/emitters.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  formdisable: boolean;
  email1: any;
  email:any={};
  errormessage: boolean;
  constructor(private kyc: KycService, private emit: EmittersService) { }

  ngOnInit() {
    this.email1 = localStorage.getItem('setemail');
    
    this.emit.change.subscribe( res => {
      console.log('emit res', res);
      this.email1 = res;
      //this.login = true;
      this.verifyemail();
    });
    this.verifyemail();
    this.verifykkcapplication()
  
  }
  verifyemail() {
    this.email.email=this.email1;
    this.kyc.VerifyKycForm(this.email).subscribe(
      res => {
        if (res.status === true) {
          console.log(res);
          this.formdisable = true;
          console.log(this.formdisable);
          
        }
        else if (res.status === false) {
          this.formdisable= false;
        }
      }
    )
  }

  verifykkcapplication()
  {
    this.kyc.getKycForm(this.email).subscribe(
      res => {
        if (res.status === true) {
          console.log(res);
         this.errormessage = true;
          console.log(this.formdisable);
          
        }
        else if (res.status === false) {
          this.errormessage= false;
        }
      }
    )
  }
}
