import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

//@Injectable means it is service class
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseUrl1 = "http://localhost:8089/Getemployees"
  private baseUrl2 = "http://localhost:8089/Addemployees"
  constructor(private httpclient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseUrl1}`);
  }

  createEmployee(employee:Employee): Observable<object>{
    return this.httpclient.post<Employee[]>(`${this.baseUrl2}`, employee);
  }
}
