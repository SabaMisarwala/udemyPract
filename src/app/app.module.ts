import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from './courses/courses.service';
import { FavouriteItemComponent } from './favourite-item/favourite-item.component';
import { PanelComponent } from './panel/panel.component';
import { LikesComponent } from './likes/likes.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFromComponent } from './contact-from/contact-from.component';
import { CourseFormComponent } from './course-form/course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    FavouriteItemComponent,
    PanelComponent,
    LikesComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFromComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
