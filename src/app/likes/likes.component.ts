import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent  {

  @Input() likesCount: number;
  @Input() isActive : boolean;

  onClick(){
    this.likesCount ++;
    this.isActive = !this.isActive
  }


 

}
