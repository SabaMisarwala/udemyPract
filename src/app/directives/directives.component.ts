import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

courses =  [1,2,3];
//ngSwitch
viewMode = 'list';

//ngFor
coursesObj = [
{id : 1 , name:'course A'},
{id : 2 , name:'course B'},
{id : 3 , name:'course C'}
]

Add(){
  this.coursesObj.push({id:4 , name : 'course D'})
}

Remove(course){
  let index = this.coursesObj.indexOf(course);
  this.coursesObj.splice(index , 1);
}

//ngStyle
canSave = true;
cannotSave = false;

//safe traversal operator
task = {
  title : 'Something',
  assignee : {
    name : 'John Doe'
  }
}

}
