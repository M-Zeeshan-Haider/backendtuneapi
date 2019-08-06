import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kyc-main',
  templateUrl: './kyc-main.component.html',
  styleUrls: ['./kyc-main.component.scss']
})
export class KYCMainComponent implements OnInit {
@Output() goToFormTrigger = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  goToForm() {
    this.goToFormTrigger.emit(true);
  }
}
