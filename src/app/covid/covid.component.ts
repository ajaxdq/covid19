import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  cv = [];
  cvApi = [];
  cv2;
  show = false;
  details;
  alert = false;
  addC = false;
  temp;

  @Input() countryName: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('https://api.covid19api.com/summary').subscribe(data => {
      this.cvApi = data.Countries;
      if (localStorage.getItem('newCountries')) {
        this.cv = this.cvApi.concat(JSON.parse(localStorage.getItem('newCountries')));
      } else {
        this.cv = this.cvApi;
      }
      if (this.countryName) {
        this.fetchCountryByName(this.countryName);
      }
    },err => {
      console.log(err);
  })
    if(this.cv.length == 0){
      this.cv = JSON.parse(localStorage.getItem('newCountries'));
    }
  }

  selectChangeHandler(event: any) {
    //update the ui
    //document.getElementById("na").innerHTML = event;
    if(!event.Slug.startsWith('NEW_')){
      this.fetchCountryDetails(event);

    }
  }

  clicker(x: any) {
    if(!x.Slug.startsWith('NEW_')){
      this.fetchCountryDetails(x);

    }  }

  edit(x: any) {
    event.stopPropagation();
    this.addC = true;
    var x2 = document.getElementById("tabl");
    x2.style.display = "none";
    let newCountries = JSON.parse(localStorage.getItem('newCountries'));
    this.temp = newCountries.find(obj => {
      return obj.Slug == x
    });
    console.log("0", this.temp);
  }

  remove(x: any) {
    event.stopPropagation();
    let newCountries = JSON.parse(localStorage.getItem('newCountries'));
    newCountries.splice(newCountries.findIndex(obj => {
      return obj.Slug == x
    }), 1);
    localStorage.setItem('newCountries', JSON.stringify(newCountries));
    // console.log(result);
    if (localStorage.getItem('newCountries')) {
      this.cv = this.cvApi.concat(JSON.parse(localStorage.getItem('newCountries')));
    } else {
      this.cv.pop();
    }
    // this.cv.splice(x, 1);

  }

  fetchCountryDetails(id: any) {
    if (localStorage.getItem('access_token')) {
      this.show = false;
      this.http.get<any>('https://api.covid19api.com/total/dayone/country/' + id.Slug).subscribe(data => {
        this.cv2 = data;
        for (let i in this.cv2) {
          this.cv2[i].Date = this.cv2[i].Date.substring(0, 10);
        }
        this.show = true;
        window.scrollTo(0, 0);
      },err => {
        console.log(err);
    })
    } else {
      this.alert = true;
    }

  }
  closeGraph() {
    this.show = false;
  }


  fetchCountryByName(name: any) {
    if (localStorage.getItem('access_token')) {
      this.show = false;
      this.http.get<any>('https://api.covid19api.com/total/dayone/country/' + name).subscribe(data => {
        this.cv2 = data;
        for (let i in this.cv2) {
          this.cv2[i].Date = this.cv2[i].Date.substring(0, 10);
        }
        this.show = true;
        window.scrollTo(0, 0);
      },err => {
        console.log(err);
    })
    } else {
      this.alert = true;
    }
  }

  alertClose() {
    this.alert = false;
  }

  addCountry() {
    this.addC = true;
    var x = document.getElementById("tabl");
    x.style.display = "none";
  }

  closeModal(event) {
    this.temp = null;
    console.log("2", this.cv);
    this.addC = event;
    var x = document.getElementById("tabl");
    x.style.display = "table";
  }

  updatd(event) {
    console.log("up", event);
    if (localStorage.getItem('newCountries')) {
      this.cv = this.cvApi.concat(JSON.parse(localStorage.getItem('newCountries')));
    }
  }

}
