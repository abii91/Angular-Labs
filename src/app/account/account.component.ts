import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser = null;

  constructor(private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem("user", null);
    this.router.navigate(['/']);
  }

}
