import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message='Hello World';
  title = 'CoursesApp';
  username='Arthi';
  today=new Date();
  jsonData={name:"aa",dept:"cse"}
  //percentage= 0000.89;
  customPlaceHolder="Enter your first name"
  styleHeading="red";
  months=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG"]
  handleLoad()
  {
    
  }
  handleClick()
  {
    alert('Button is clicked');
  }
  handleFocus()
  {
    alert("Text control is in focus");
  }
}
