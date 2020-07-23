import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      designation: new FormControl('private'),
      sector: new FormControl()
    })
  }


  signup() {
    console.log(this.signUpForm.value);
    if (localStorage.getItem('users')) {
      let users = JSON.parse(localStorage.getItem('users'));
      users.push(this.signUpForm.value);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      let users = [];
      users.push(this.signUpForm.value);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

}

