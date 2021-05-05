import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  choosenTheaterId;
  theaterData;
  movieData;
  selectedSeats;
  price = 150;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) { 
      this.choosenTheaterId = this.apiService.theaterIdChoosen;
     }

  ngOnInit(): void {
    this.apiService.getTheaterById(this.choosenTheaterId).subscribe(
      (result)=>{
        console.log(result);
        this.theaterData = result;
      }, (error)=>{
        console.log(error);
      }
    );
    this.movieData = this.apiService.movieChoosen;
    this.selectedSeats = this.apiService.choosenSeats;
  }

}
