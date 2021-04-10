import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.css']
})
export class QuestionTwoComponent implements OnInit {

  questionTwoAnswer: string;
  questionTwoOriginalAnswer: string = 'Others';
  score = GlobalConstants.score;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToQuestionThree() {
    if (this.questionTwoAnswer != undefined) {
      this._router.navigate(['question-three']);
    } else {
      alert("Kindly enter answer of Question2 and Proceed!");
    }
  }

  onAnswerTwoChange(value) {
    this.questionTwoAnswer = value;
    if (this.questionTwoAnswer == this.questionTwoOriginalAnswer) {
      this.score = this.score + 1;
      console.log(this.score);
      GlobalConstants.score = this.score;
      console.log(GlobalConstants.score)

    } else {
      this.score = 0;
    }

  }

}
