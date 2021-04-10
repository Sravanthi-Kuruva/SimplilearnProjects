import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';


@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.css']
})
export class QuestionThreeComponent implements OnInit {

  questionThreeAnswer: string;
  questionThreeOriginalAnswer: string = 'JDB';
  score = GlobalConstants.score;


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToQuestionFour() {
    if (this.questionThreeAnswer != undefined) {
      this._router.navigate(['question-four']);
    } else {
      alert("Kindly enter answer of Question3 and Proceed!");
    }
  }

  onAnswerThreeChange(value) {
    this.questionThreeAnswer = value;
    if (this.questionThreeAnswer == this.questionThreeOriginalAnswer) {
      this.score = this.score + 1;
      console.log(this.score);
      GlobalConstants.score = this.score;
      console.log(GlobalConstants.score)

    } else {
      this.score = 0;
    }
  }

}
