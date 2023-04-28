import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkingService {

  constructor(private _http:HttpClient) { }
  base_url="https://localhost:7290/api/Employee/"

  getAllEmployee(){
return this._http.get<any>(this.base_url+"getallemp")
  }
}
