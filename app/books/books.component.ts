import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookId:any;//number,string,boolean
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.bookId=this.route.snapshot.paramMap.get('id');
  }
  b=new Book(0,"Enter Book Name","Auhtor Name",0.0);
}
