import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';


@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.css']
})
export class QuestionFourComponent implements OnInit {

  questionFourAnswer: string;
  questionFourOriginalAnswer: string = 'int';
  score = GlobalConstants.score;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToQuestionFour() {
    if (this.questionFourAnswer != undefined) {
      this._router.navigate(['question-five']);
    } else {
      alert("Kindly enter answer of Question4 and Proceed!");
    }
  }

  onAnswerFourChange(value) {
    this.questionFourAnswer = value;
    if (this.questionFourAnswer == this.questionFourOriginalAnswer) {
      this.score = this.score + 1;
      console.log(this.score);
      GlobalConstants.score = this.score;
      console.log(GlobalConstants.score)
    } else {
      this.score = 0;
    }

  }


}
