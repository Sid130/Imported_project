import { Component, OnInit } from '@angular/core';

import { Chart } from "../../../../node_modules/chart.js"
import { ServiceService } from "../../service.service";


@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
  styleUrls: ['./graph-dashboard.component.css']
})
export class GraphDashboardComponent implements OnInit {

 

  time:any
  transparency:any

  constructor( private stockservice:ServiceService ) { 

    
  }

  user:string=''
  fname:string=''

  graphtype=['radar','line','pie','doughnut','polarArea','bar']

  gtype:string='bar'
  sgtype:string='bar'
  
  myChart:any
  mysecondChart:any

   

  


  ngOnInit(): void {

    this.stockservice.getVolume().subscribe(data =>{
      console.warn(data)
      this.time=data['dataseries'].map(data => data.timepoint)
      this.transparency=data['dataseries'].map(data => data.transparency)
      console.log(this.time)
      console.log(this.transparency)
      this.applycolor()
    })
    
    this.displaygraph()
    this.displaysecondgraph()
  }


  displaygraph()
  {
     this.myChart = new Chart("myChart", {
      type: this.gtype,
      data: {
          labels: this.year,
          datasets: [{
              label: 'Year',
              data: this.population,
              borderColor:"#3cba9f",
              backgroundColor:this.coloR,
              borderWidth: 1
          }]
      },
      options: {
        scales: {
          xAxes: [{
             gridLines: {
                display: false
             }
          }],
          yAxes: [{
          }]
       }
      }
  });
  }


  displaysecondgraph()
  {
     this.mysecondChart = new Chart("mysecondChart", {
      type: this.sgtype,
      data: {
          labels: this.time,
          datasets: [{
              label: 'Time',
              data: this.transparency,
              borderColor:"#3cba9f",
              backgroundColor:this.colors,
              borderWidth: 1
          }]
      },
      options: {
        scales: {
          xAxes: [{
             gridLines: {
                display: false
             }
          }],
          yAxes: [{
          }]
       }
      }
  });
  }

  setgraphtype(graph:any)
  {
    this.myChart.destroy()
    this.gtype=graph;
    this.displaygraph()
  }

  setsecondgraphtype(graph:any)
  {
    this.mysecondChart.destroy()
    this.sgtype=graph;
    this.displaysecondgraph()
  }


}
