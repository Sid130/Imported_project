import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

  getPopulation()
  {
    let url="https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    return this._http.get(url)

  }
  getVolume()
  {
    let url="http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
    return this._http.get(url)

  }

  username:string;
  fullname:string;
  
}
