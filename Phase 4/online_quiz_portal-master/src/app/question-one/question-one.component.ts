import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';


@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent implements OnInit {

  questionOneAnswer: string;
  questionOneOriginalAnswer: string = 'Bytecode is executed by JVM';
  score = GlobalConstants.score;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToQuestionTwo() {
    if (this.questionOneAnswer != undefined) {
      this._router.navigate(['question-two']);
    } else {
      alert("Kindly enter answer of Question1 and Proceed!");
    }
  }

  onAnswerOneChange(value) {
    this.questionOneAnswer = value;
    if (this.questionOneAnswer == this.questionOneOriginalAnswer) {
      this.score = this.score + 1;
      console.log(this.score)
      GlobalConstants.score = this.score;
      console.log(GlobalConstants.score)
    } else {
      this.score = 0;
    }

  }

}
