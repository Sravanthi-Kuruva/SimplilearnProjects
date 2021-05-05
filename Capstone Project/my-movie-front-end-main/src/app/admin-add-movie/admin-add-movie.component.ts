import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent implements OnInit {
  addMovieForm:FormGroup;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private router: Router) {
    
   }

  ngOnInit(): void {

    this.addMovieForm=this.fb.group({
      'name':[null, Validators.required],
      'duration':[null, Validators.required],
      'language':[null, Validators.required],
      'genre':[null, Validators.required]
    });

  }

  addMovie(){
    this.apiService.addMovie(
      this.addMovieForm.value.name,
      this.addMovieForm.value.duration,
      this.addMovieForm.value.language,
      this.addMovieForm.value.genre).subscribe(
        (result)=>{
          console.log(result);
          this.router.navigate(["admin/movies"]);
        }, (error)=>{
          console.log(error);
        }
      )
  }
}
