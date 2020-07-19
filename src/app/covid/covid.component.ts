import { Component, OnInit, Input } from '@angular/core';
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
  token = localStorage.getItem('access_token');
  alert = false;

  @Input() countryName: any;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.http.get<any>('https://api.covid19api.com/summary').subscribe(data => {
      this.cv = data.Countries;
      // console.log(this.cv);
      if(this.countryName){
        console.log(this.countryName);
        this.fetchCountryByName(this.countryName);
      }
    })

  }

  selectChangeHandler(event: any) {
    //update the ui
    //document.getElementById("na").innerHTML = event;
    // console.log(event);
    // this.router.navigate(['/covid',event.Country])
    // this.details = event;

    this.fetchCountryDetails(event);


  }

  clicker(x: any) {
    this.fetchCountryDetails(x);
  }

  fetchCountryDetails(id :any){ 
    if(this.token){
      this.show = false;
      this.http.get<any>('https://api.covid19api.com/total/dayone/country/'+id.Slug).subscribe(data => {
        this.cv2 = data;
        this.show = true;
        window.scrollTo(0, 0);
      })
    } else {
      this.alert = true;
    }

  }


  fetchCountryByName(name: any){
    if(this.token){
      this.show = false;
      this.http.get<any>('https://api.covid19api.com/total/dayone/country/'+name).subscribe(data => {
        this.cv2 = data;
        this.show = true;
        window.scrollTo(0, 0);
      })
    } else {
      this.alert = true;
    }
  }

  alertClose(){
    this.alert = false;
  }

}
