import { Component, OnInit } from '@angular/core';
import { Course } from '../Course';
import { lcourse } from '../Lcourses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scourse?:Course;
  handleCourse(scourse:Course):void
  {
    this.scourse=scourse;
  }
  listOfCourses=lcourse;

}
