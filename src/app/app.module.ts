import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { NewWordComponent } from './new-word/new-word.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ViewChildComponent } from './view-child.component';
import { ViewParentComponent } from './view-parent.component';
import { CardComponent } from './card.component';

import { AppRoutingModule } from './app-routingModule';
import { PipeComponent } from './pipe/pipe.component';
import { RoundPie } from './round.pipe';
import { EvenBindingComponent } from './even-binding/even-binding.component';
import { ViewComponentViewComponent } from './view-component-view/view-component-view.component';
import { StructuralComponent } from './structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    NewWordComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    ViewChildComponent,
    ViewParentComponent,
    CardComponent,
    PipeComponent,
    RoundPie,
    EvenBindingComponent,
    ViewComponentViewComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
