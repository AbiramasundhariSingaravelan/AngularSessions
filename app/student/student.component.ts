import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studList:any;
  constructor(private studService:StudentListService){

  }
  getStudents()
  {
  this.studService.getStudentList().subscribe(data=>{
    this.studList=data;
  })
}
  ngOnInit(): void {
  }

}
