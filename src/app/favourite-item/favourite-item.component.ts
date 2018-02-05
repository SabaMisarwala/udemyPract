import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.css']
})
export class FavouriteItemComponent implements OnInit {

@Input() isFavourite : boolean ;
// @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    //this.change.emit(this.isFavourite);

    //to pass object instead of just boolean value
    // this.click.emit({newValue :this.isFavourite})
  }
  

}

 export interface FavouriteChangedEventArgs{
  newValue : boolean
}