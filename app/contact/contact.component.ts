import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Creating individual objects for every form field
  name =new FormControl(Validators.required);
  message=new FormControl(Validators.minLength(100));
  mobile=new FormControl(Validators.compose([Validators.required,Validators.min(10),Validators.max(10)]));
  button=new FormControl();
  //one instance for all form fields
  formcontrols=new FormGroup(
    {
      name :new FormControl(),
      message:new FormControl(),
      mobile:new FormControl()
    }
  )
}
