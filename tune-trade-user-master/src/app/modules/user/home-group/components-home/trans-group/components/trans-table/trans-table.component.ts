import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trans-table',
  templateUrl: './trans-table.component.html',
  styleUrls: ['./trans-table.component.scss']
})
export class TransTableComponent implements OnInit {
  transactions = [
    {
      token: 18450,
      amount: 3.543,
      date: 	'2018-08-24 10:20 PM',
      type: 'purchase'
    },
    {
      token: 18450,
      amount: 3.543,
      date: 	'2018-08-24 10:20 PM',
      type: 'bonus'
    },
    {
      token: 18450,
      amount: 3.543,
      date: 	'2018-08-24 10:20 PM',
      type: 'bonus'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
