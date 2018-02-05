import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.css']
})
export class ContactFromComponent  {
contactMethods = [
  {id :1 ,name:'Email'},
  {id :2 ,name:'Phone'}
]
 log(x){
  console.log(x)
 }
submit(f){
  console.log(f)
}
}
