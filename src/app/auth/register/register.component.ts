import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor(private router: Router) {}

  
    ngOnInit(): void {
    }
    signup(form: NgForm) {
      // console.log(form.controls['name'].value);
      // console.log(form.controls['password'].value);
      if(form.controls['name'].value == "covid" && form.controls['password'].value == "covid") {
        localStorage.setItem('access_token', "jwt_token");
        this.router.navigateByUrl('/home');
      }
  
    }




}
