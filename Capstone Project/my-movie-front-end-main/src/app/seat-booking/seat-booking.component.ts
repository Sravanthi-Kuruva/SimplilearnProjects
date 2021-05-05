import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {

  rowList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'G', 'H'];
  columnList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  bookedSeats = ['A1', 'C3'];
  selectedSeats:String[] = [];

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.getBookSeatsByDateTime(this.apiService.theaterIdChoosen,
      this.apiService.dateChoosen,
      this.apiService.timeChoosen).subscribe(
      (result:any)=>{
        console.log(result);
        let seats = [];
        for(let seat of result.response){
          seats.push(seat.seat.trim())
        }
        this.bookedSeats = seats;
        console.log(this.bookedSeats);
      }, (error)=>{
        console.log(error);
      }
    )
  }

  onClickSeat(e){
    e.target.classList.toggle("selectedSeat");
    let targetIndex = this.selectedSeats.indexOf(e.target.textContent);
    if(targetIndex>-1){
      this.selectedSeats.splice(targetIndex,1);
    } else {
      this.selectedSeats.push(e.target.textContent);
    }
  }

  bookSeats(){
    this.apiService.choosenSeats = this.selectedSeats;
    this.apiService.postBookSeatsByDateTime(this.apiService.theaterIdChoosen,
      this.apiService.dateChoosen,
      this.apiService.timeChoosen,
      this.selectedSeats).subscribe(
      (result)=>{
        console.log(result);
        this.router.navigate(['/checkout']);
      }, (error)=>{
        console.log(error);
      }
    );
    console.log(this.selectedSeats);
  }

}
