import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  getStudentList()
  {
    let stud:Student[];
    stud=[
      new Student(1,"ARthi","CSE","Chennai"),
      new Student(2,"Abinaya","IT","Hyderabad"),
      new Student(3,"Santhosh","IT","Bangalore"),
      new Student(4,"ANish","IT","Hyderabad"),
      new Student(5,"Karthik","IT","Hyderabad"),
      new Student(6,"Sahana","IT","Hyderabad"),
    ]
    return stud;
  }
  constructor() { }
}
