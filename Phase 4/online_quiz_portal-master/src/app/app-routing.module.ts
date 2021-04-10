import {Routes} from "@angular/router";
import { QuestionOneComponent } from "./question-one/question-one.component";
import { QuestionTwoComponent } from "./question-two/question-two.component";
import { QuestionThreeComponent } from "./question-three/question-three.component";
import { QuestionFourComponent } from "./question-four/question-four.component";
import { QuestionFiveComponent } from "./question-five/question-five.component";
import { ResultPageComponent } from "./result-page/result-page.component";


export const applicationRoutes : Routes = [
    {path: 'question-one' , component : QuestionOneComponent},
    {path: 'question-two' , component : QuestionTwoComponent},
    {path: 'question-three' , component : QuestionThreeComponent},
    {path: 'question-four' , component : QuestionFourComponent},
    {path: 'question-five' , component : QuestionFiveComponent},
    {path: 'result-page' , component : ResultPageComponent},

]