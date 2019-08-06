import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KYCComponent implements OnInit {
  showMain    = true;
  showForm    = false;
  showSuccess = false;
  constructor() { }

  ngOnInit() {
  }
  goToForm(event) {
    this.showMain    = false;
    this.showForm    = true;
    this.showSuccess = false;
  }
  goToSuccess(event) {
    this.showMain    = false;
    this.showForm    = false;
    this.showSuccess = true;
  }
}
