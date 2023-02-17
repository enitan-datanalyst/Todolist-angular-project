import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  {
    path:' ',
    component: AppComponent
  },
  {
    path: "todolist",
    component: TodolistComponent
  },
    
  {
     path: "todolist/:id",
     component: TodoDetailsComponent
  },
 
    
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
