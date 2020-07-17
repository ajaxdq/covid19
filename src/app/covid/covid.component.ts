import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
cv;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('https://api.covid19api.com/summary').subscribe(data => {
            this.cv = data.Countries;
            console.log(this.cv);
        })
        
  }

  selectChangeHandler (event: any) {
    //update the ui
    //document.getElementById("na").innerHTML = event;
    // console.log(event);
  }

}
