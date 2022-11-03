import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { Course } from './Course';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path:'view-courses',
    component:CoursesComponent
  },
  {
    path:'view-books',
    component:BooksComponent
  },
  {
    path:'contact-us',
    component:ContactComponent
  },
  //localhost:4200/books/3
  {
    path:'books/:id',
    component:BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
