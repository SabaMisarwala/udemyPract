import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
courseCategories = [
  {id :1 , name :'development'},
  {id: 2 , name : 'Art'},
  {id :3 , name : 'Languages'}
]

print(courseName){
  console.log(courseName)
}

submit(courses){
console.log(courses)
}


}
