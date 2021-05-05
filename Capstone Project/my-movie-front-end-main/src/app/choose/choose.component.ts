import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  theatersList;
  chooseForm:FormGroup;
  choosenMovie:any;
  choosenTheaterId;
  choosenDate;
  choosenTime;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) { 
      this.choosenMovie = this.apiService.movieChoosen;
     }

  ngOnInit(): void {

    this.apiService.getAllTheatersListByMovieId(this.choosenMovie.id).subscribe(
      (result:any)=>{
        this.theatersList = result.text;
        console.log(this.theatersList);
      }, (error)=>{
        console.log(error);
      }
    )
    
    this.chooseForm=this.fb.group({
      'theater':[null, Validators.required],
      'date':[null, Validators.required],
      'time':[null, Validators.required]
    });
  }

  choose(){
    this.choosenDate = this.chooseForm.value.date;
    this.choosenTime = this.chooseForm.value.time;
    this.apiService.timeChoosen = this.choosenTime;
    this.apiService.dateChoosen = this.choosenDate;
    this.apiService.theaterIdChoosen = this.choosenTheaterId;
    this.router.navigate(['/bookseats']);
  }

  setTheaterId(){
    let theaterData = this.chooseForm.value.theater;
    this.choosenTheaterId = parseInt(theaterData.split(")")[0]);
    console.log(this.choosenTheaterId);
  }

}
