import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-app';
  routeURL!: any
  constructor(private router : Router){
    console.log(this.router.url)
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeURL = event.url;
        
    
          }
        });
       }
  

  getTodos(){
    this.router.navigateByUrl('/todolist')
  }
}
