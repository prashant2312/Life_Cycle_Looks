import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http:HttpClient) { }
  base_url="https://jsonplaceholder.typicode.com/posts";
  getData(){
    return this.http.get<any>(this.base_url)
  }
}
