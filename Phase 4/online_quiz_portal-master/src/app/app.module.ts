import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { MainComponent } from './main/main.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import {RouterModule} from '@angular/router';
import { applicationRoutes } from './app-routing.module';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionFourComponent } from './question-four/question-four.component';
import { QuestionFiveComponent } from './question-five/question-five.component';
import { ResultPageComponent } from './result-page/result-page.component';


@NgModule({
  declarations: [
    MainComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuestionFourComponent,
    QuestionFiveComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes,{
      anchorScrolling: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
