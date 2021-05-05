import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {
  moviesList;
  addMovieForm:FormGroup;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.addMovieForm=this.fb.group({
      'name':[null, Validators.required],
      'duration':[null, Validators.required],
      'language':[null, Validators.required],
      'genre':[null, Validators.required]
    });

    this.apiService.getAllMoviesList().subscribe(
      (result)=>{this.moviesList = result;
      console.log(this.moviesList)},
      (error)=>console.log(error)
    );
  }

  reloadMoviesList(){
    this.apiService.getAllMoviesList().subscribe(
      (result)=>{this.moviesList = result;
      console.log(result)},
      (error)=>console.log(error)
    );
  }

  addMovie(){
    this.router.navigate([`admin/movies/addmovie`]);
    console.log(this.moviesList);
  }

  onClickEdit(movie_id){
    this.router.navigate([`admin/movies/editmovie/${movie_id}`]);
  }

  deleteMovie(movie_id){
    this.apiService.deleteMovie(movie_id).subscribe(
      (result) => {
        console.log(result);
        console.log("movie deleted successfully")
        this.reloadMoviesList();
      }, (error)=>{
        console.log(error);
      }
    )
  }
}
