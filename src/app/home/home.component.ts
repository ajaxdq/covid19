import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countryName;
  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      let splashScreen = document.getElementById('splashScreenClass');
      splashScreen.remove();
    }, 6000);
    this.activateRouter.params.subscribe(params => {
      this.countryName = params['id'];
      // console.log("jj", this.countryName);
    });

  }

}
