import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesList;
  chooseForm:FormGroup;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllActiveMovies().subscribe(
      (result)=>{this.moviesList = result;
      console.log(this.moviesList)},
      (error)=>console.log(error)
    );
  }

  bookMovie(movie:any){
    this.apiService.movieChoosen = movie;
    this.router.navigate(['/choose']);
  }

}
