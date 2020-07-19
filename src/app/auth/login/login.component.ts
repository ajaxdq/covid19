import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  // login = () => {
  //   // if((document.getElementById("nam") as HTMLInputElement).value !== (document.getElementById("pas") as HTMLInputElement).value)
  //   // this.arr = ["0", "1", "2", "3"];
  //   // else
  //   this.router.navigateByUrl('/register');
  // }

  login(form: NgForm) {
    // console.log(form.controls['name'].value);
    // console.log(form.controls['password'].value);
    if(form.controls['name'].value == "covid" && form.controls['password'].value == "covid") {
      localStorage.setItem('access_token', "jwt_token");
      this.router.navigateByUrl('/home');
    }

  }

  // close = (x) => {
  //   //this.arr.splice(x, 1);
  //   this.arr[x] = ""
  // }

}
