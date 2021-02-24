import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myservice:ServiceService) { }

  user:string=''
  fname:string=''

  graphtype=['radar','line','pie','doughnut','polarArea','bar']

  gtype:string='bar'

  year:any
  population:any

  colors=[];
  
  myChart

  ngOnInit(){

    this.user=this.myservice.username
    this.fname=this.myservice.fullname
    console.log(this.user)
    console.log(this.fname)
    
  }

  getData()
  {
    this.myservice.getPopulation().subscribe(data =>{
      console.warn(data)
      this.year=data['data'].map(data => data.Year)
      this.population=data['data'].map(data => data.Population)
      console.log(this.year)
      console.log(this.population)
      this.applycolor()

    })
  }

  dynamicColor()
  {
    let r=Math.floor(Math.random() *255);
    let g=Math.floor(Math.random() *255);
    let b=Math.floor(Math.random() *255);
    return "rgb(" + r + "," + g + "," + b + ")";

  }

  applycolor()
  {
    for(let i in this.population)
    {
      this.colors.push(this.dynamicColor())
    }

  }


  

  get username()
  {
    return this.myservice.username
  }

  get fullname()
  {
    return this.myservice.fullname
  }

  

  // ngOnChanges()
  // {
  //   this.displaygraph();
    
  // }


}
