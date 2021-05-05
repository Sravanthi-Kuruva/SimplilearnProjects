import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-active-show',
  templateUrl: './active-show.component.html',
  styleUrls: ['./active-show.component.css']
})
export class ActiveShowComponent implements OnInit {

  moviesList;

  constructor(private apiService:CommunicationService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  

  this.apiService.getAllMoviesList().subscribe(
    (result)=>{this.moviesList = result;
    console.log(this.moviesList)},
    (error)=>console.log(error)
  );

    }
  }