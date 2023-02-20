import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  userId: any = [];
  users: any;
  user: any;
  todoId: any;
  todo_details: any;

  is_show: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.todoId = this.route.snapshot.paramMap.get('id');
    console.log(this.todoId);
  }

  ngOnInit(): void {
    this.getTodoItem();
  }

  getTodoItem() {
    console.log('user', this.todoId);
    this.http
      .get(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`)
      .subscribe(async (data) => {
        console.log(data);
        this.todo_details = data;
         await this.getUser()
      });
  }

  getUser() {
    console.log(this.todo_details.userId);
    this.http
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.todo_details.userId}`
      )
      .subscribe((data) => {
        this.user = data;
        this.is_show = false;
        console.log(data);
      });
  }

  hideUser(){
    
    this.is_show = true
  }
}
