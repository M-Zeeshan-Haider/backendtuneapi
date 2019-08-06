import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trans-calc',
  templateUrl: './trans-calc.component.html',
  styleUrls: ['./trans-calc.component.scss']
})
export class TransCalcComponent implements OnInit {
  convertedValue = 0;
  constructor() { }

  ngOnInit() {
  }
  convertValue(cryptoValue) {
    this.convertedValue = cryptoValue*3;
    console.log(this.convertedValue);
  }
}
