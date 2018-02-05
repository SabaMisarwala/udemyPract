import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import {FavouriteChangedEventArgs} from './favourite-item/favourite-item.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

 // favourite method
  // post = {
  //   titleFav : 'Favorite',
  //   isFavourite : true
  // }

//likes exercise
  tweet = {
    likesCount : 0,
    isLiked : false
  }
//for boolean value
  // onFavouriteChanged = (isFavourite) => console.log("Favorite  Changed :" , isFavourite);

  //for object
  onFavouriteChanged = (eventArgs:FavouriteChangedEventArgs) => console.log("Favorite  Changed :" , eventArgs);
}
