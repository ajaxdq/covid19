import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  cv;
  cv2;
  show = false;
  details;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.http.get<any>('https://api.covid19api.com/summary').subscribe(data => {
      this.cv = data.Countries;
      // console.log(this.cv);
    })

  }

  selectChangeHandler(event: any) {
    //update the ui
    //document.getElementById("na").innerHTML = event;
    // console.log(event);
    // this.router.navigate(['/covid',event.Country])
    this.show = false;
    this.http.get<any>('https://api.covid19api.com/dayone/country/'+event.Slug).subscribe(data => {
      this.cv2 = data;
      // console.log("ghv",this.cv2);
      this.show = true;
    })
    // this.details = event;

  }

  clicker(x: any) {
    // console.log(x);
    this.show = false;
    this.http.get<any>('https://api.covid19api.com/dayone/country/'+x.Slug).subscribe(data => {
      this.cv2 = data;
      // console.log("ghv",this.cv2);
      this.show = true;
      window.scrollTo(0, 0);
    })

  }

}
