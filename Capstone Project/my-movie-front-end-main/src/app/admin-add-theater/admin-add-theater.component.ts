import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-add-theater',
  templateUrl: './admin-add-theater.component.html',
  styleUrls: ['./admin-add-theater.component.css']
})
export class AdminAddTheaterComponent implements OnInit {
  addTheaterForm:FormGroup;
  moviesList:any;
  movieId:number;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private router: Router) {
    
   }

  ngOnInit(): void {

    this.addTheaterForm=this.fb.group({
      'theatreName':[null, Validators.required],
      'theatreAddress':[null, Validators.required],
      'movieId':[null, Validators.required]
    });

    this.apiService.getAllMoviesList().subscribe(
      (result)=>{
        this.moviesList = result;
        console.log(this.moviesList);
      }, (error)=>{
        console.log(error);
      }
    );

  }

  addTheater(){
    this.apiService.addTheater(
      this.movieId,
      this.addTheaterForm.value.theatreName,
      this.addTheaterForm.value.theatreAddress).subscribe(
        (result)=>{
          console.log(result);
          this.router.navigate(["admin/theaters"]);
        }, (error)=>{
          console.log(error);
        }
      )
  }

  setMovieId(){
    let movieName = this.addTheaterForm.value.movieId;
    this.movieId = parseInt(movieName[0]);
    console.log(this.movieId);
  }

}
