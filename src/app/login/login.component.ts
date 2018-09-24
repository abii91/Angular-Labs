import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pages = {
    username: '',
    password: ''
  };
  errorMessage = null;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  logIn(pages) {
    if(pages.username === "test" && pages.password === "123"){
      this.router.navigate(['/account']);
    }
    else{
      console.log("asdasd");
      this.errorMessage = "The username or password is wrong.";
    }
  }

}
