import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-edit-movie',
  templateUrl: './admin-edit-movie.component.html',
  styleUrls: ['./admin-edit-movie.component.css']
})
export class AdminEditMovieComponent implements OnInit {

  editMovieForm:FormGroup;
  editingMovieId;
  editingdMovie;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.editingMovieId = params.id );
   }

  ngOnInit(): void {

    this.apiService.getMovieById(this.editingMovieId).subscribe(
      (result)=>{this.editingdMovie = result;},
      (error)=>{console.log(error)}
    )

    this.editMovieForm=this.fb.group({
      'name':[null, Validators.required],
      'duration':[null, Validators.required],
      'language':[null, Validators.required],
      'genre':[null, Validators.required]
    });

  }

  editMovie(){
    this.apiService.editMovie(this.editingMovieId,
      this.editMovieForm.value.name,
      this.editMovieForm.value.duration,
      this.editMovieForm.value.language,
      this.editMovieForm.value.genre).subscribe(
        (result)=>{
          console.log(result);
          this.router.navigate(["admin/movies"]);
        }, (error)=>{
          console.log(error);
        }
      )
  }
}
