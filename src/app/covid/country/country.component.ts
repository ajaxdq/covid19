import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  data;
  Confirmed;
  Deaths;
  Recovered;
  Date;



  public barChartOptions: ChartOptions = {
    // responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['FEB','MAR','APR','MAY','JUN','JUL'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmed' },
    { data: [], label: 'Recovered' },
    { data: [], label: 'Deaths' }

  ];



  
  constructor( private activateRouter:ActivatedRoute) { }

  @Input() cv2: any;

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      this.data = params['id'];
      // console.log("jj",this.cv2);
      this.Confirmed = this.cv2.map(({ Confirmed }) => Confirmed);
      this.Recovered = this.cv2.map(({ Recovered }) => Recovered);
      this.Deaths = this.cv2.map(({ Deaths }) => Deaths);

      this.Date = this.cv2.map(({Date}) => Date);
      // this.Confirmed = this.Confirmed.map(String);
      // console.log(this.Confirmed);
      this.barChartLabels = this.Date;
      this.barChartData = [
        {data:this.Confirmed,label:'Confirmed'},
        { data: this.Recovered, label: 'Recovered' },
        { data: this.Deaths, label: 'Deaths' }

      ];
      });
  }

}
