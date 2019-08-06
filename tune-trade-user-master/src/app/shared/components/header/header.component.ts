import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  logOut()
  {
    
    localStorage.clear();
    sessionStorage.clear();
    this.route.navigateByUrl('/');
  }
}
