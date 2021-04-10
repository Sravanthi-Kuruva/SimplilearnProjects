import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  totalScore: number;

  constructor(private _router: Router) {
    this.totalScore = GlobalConstants.score
  }

  ngOnInit(): void {
  }

  navigateToQuestionOne() {
    GlobalConstants.score = 0;
    this._router.navigate(['question-one'], { fragment: 'question-one' });
  }


}
