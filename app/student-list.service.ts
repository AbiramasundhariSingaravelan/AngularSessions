import { Injectable } from '@angular/core';
import { Student } from './Student';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  
  constructor(private http:HttpClient) { }
  getStudentList()
  {
    return this.http.get("http://localhost:3000/students")
  }
}
