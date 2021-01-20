import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient:HttpClient) { }
  showData(): Observable <any>
  {
    return this.httpclient.get('./assets/data/sample.json')
  }
}
