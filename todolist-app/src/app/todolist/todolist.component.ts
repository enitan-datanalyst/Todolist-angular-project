import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todos$: any = [];
  todos: any = [];
  items: any;
  index: any
  todoId: any;
  todo: any;
  todoUpdate: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTodos();
    this.todos$.subscribe((data: any) => {
      console.log(data);
      this.todos = data;
      console.log(this.todos.title);
    });
  }

  getTodos() {
    this.todos$ = this.http.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=50'

    );
  }

  deleteTodo(id: any){
    console.log(id)
    this.todos = this.todos.filter((todos: any)=>todos.id !=id)
  
  }

  markCompleted(id: any){
   
    // console.log(id) 

    this.todo = this.todos.find((todo:any) => todo.id === id)
    console.log(this.todo)
    this.todo.completed = true

  //  this.todos.forEach((todo: any) => {
    
  //     if ((todo.id === id && todo.completed === false)) {
  //         todo.completed = true
  //     }
  // } );
  // }

  } 
}
