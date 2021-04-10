import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ GlobalConstants } from '../common/global-constants';


@Component({
  selector: 'app-question-five',
  templateUrl: './question-five.component.html',
  styleUrls: ['./question-five.component.css']
})
export class QuestionFiveComponent implements OnInit {

  questionFiveAnswer: string;
  questionFiveOriginalAnswer: string = 'Infinity';
  score = GlobalConstants.score;


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToResultPage() {
    if (this.questionFiveAnswer != undefined) {
      this._router.navigate(['result-page']);
    } else {
      alert("Kindly enter answer of Question5 and Proceed!");
    }
  }

  onAnswerFiveChange(value) {
    this.questionFiveAnswer = value;
    if (this.questionFiveAnswer == this.questionFiveOriginalAnswer) {
      this.score = this.score + 1;
      console.log(this.score);
      GlobalConstants.score = this.score;
      console.log(GlobalConstants.score)

    } else {
      this.score = 0;
    }
  }


}
