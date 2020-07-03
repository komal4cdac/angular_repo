import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData:Employee;
  list:Employee[];
  readonly rootURL = "https://localhost:44371/api/Employee/";
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  
  
  constructor(private http:HttpClient) { }
  
  postEmployee(formData:Employee){
 
 return  this.http.post(this.rootURL,formData);//, { 'headers': this.headers }

  }

  refreshList(){
    return this.http.get(this.rootURL).toPromise().then(res => this.list = res as Employee[]);
  }
  putEmployee(formData:Employee){
 
    return  this.http.put(this.rootURL+formData.EmployeeID,formData);//, { 'headers': this.headers }
   
     }
     deleteEmployee(id:number){
      return this.http.delete(this.rootURL+id);
     }
}
