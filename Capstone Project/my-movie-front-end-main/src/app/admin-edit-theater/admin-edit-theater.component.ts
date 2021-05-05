import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-edit-theater',
  templateUrl: './admin-edit-theater.component.html',
  styleUrls: ['./admin-edit-theater.component.css']
})
export class AdminEditTheaterComponent implements OnInit {

  editTheaterForm:FormGroup;
  editingTheaterId;
  editingTheater;
  movieId;
  moviesList;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.editingTheaterId = params.id );
   }

  ngOnInit(): void {

    this.apiService.getTheaterById(this.editingTheaterId).subscribe(
      (result)=>{this.editingTheater = result;},
      (error)=>{console.log(error)}
    )

    this.editTheaterForm=this.fb.group({
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

  editMovie(){
    this.apiService.editTheater(this.editingTheaterId,
      this.movieId,
      this.editTheaterForm.value.theatreName,
      this.editTheaterForm.value.theatreAddress).subscribe(
        (result)=>{
          console.log(result);
          this.router.navigate(["admin/theaters"]);
        }, (error)=>{
          console.log(error);
        }
      )
  }

  setMovieId(){
    let movieName = this.editTheaterForm.value.movieId;
    this.movieId = parseInt(movieName[0]);
    console.log(this.movieId);
  }
}
