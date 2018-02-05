import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 title = "List of courses";
 courses ;  //services
 isActive = true; //events
 showText = "I am input 3";


divClick = () => console.log("div was clicked");

eventBtn = ($event) => {
  $event.stopPropagation();
  console.log("btn was clicked", $event);
}

//filter event 
onKeyUp = ($event) => console.log($event.target.value);

 //filter event email
  onKeyDown =(email) => console.log(email);
 
//2 way binding
 //twoWayBinding = () => console.log(this.showText);
 
 twoWayBinding(){
   console.log(this.showText)
 }
 constructor(service : CoursesService) {

    this.courses = service.getCourses()
    

  }

  ngOnInit() {
  }

}
