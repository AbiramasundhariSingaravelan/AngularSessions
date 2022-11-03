import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stud?:Student[];
  studService:StudentListService
  constructor() {
    this.studService=new StudentListService();
   }
  getStudentData()
  {
   this.stud= this.studService.getStudentList();
  }

  ngOnInit(): void {
  }

}
